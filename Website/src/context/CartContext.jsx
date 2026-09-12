import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "gwa_cart";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.product.id,
            name: action.product.name,
            image: action.product.image,
            subcategory: action.product.intermediateCategoryId || "",
            quantity: 1,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_QTY": {
      const next = state.items
        .map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + action.delta } : i
        )
        .filter((i) => i.quantity > 0);
      return { ...state, items: next };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: loadFromStorage(),
    isOpen: false,
  });

  // Persist items to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {}
  }, [state.items]);

  const addToCart = (product) => dispatch({ type: "ADD", product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", id });
  const updateQty = (id, delta) => dispatch({ type: "UPDATE_QTY", id, delta });
  const clearCart = () => dispatch({ type: "CLEAR" });
  const openCart = () => dispatch({ type: "OPEN" });
  const closeCart = () => dispatch({ type: "CLOSE" });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));

const initialState = {
  cartItems: cartItems ? cartItems : [],
  shippingInfo: shippingInfo ? shippingInfo : {},
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;

        toast.warn("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, cartquantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { unit_price, quantity } = cartItem;
          const itemTotal = unit_price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.cartquantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          cartquantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = cartquantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.shippingInfo = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // toast.error("Cart cleared", { position: "bottom-left" });
    },
    saveShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
  },
});

//actions
export const {
  addCart,
  removeCart,
  decreaseCart,
  getTotals,
  clearCart,
  saveShippingInfo,
} = cartSlice.actions;

//select
export const getAllCart = (state) => state.cart.cartItems;

//reducer
export default cartSlice.reducer;

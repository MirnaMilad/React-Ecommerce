import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
   addToCart,
   clearCart,
   decreaseCart,
   removeFromCart,
} from "../store/reducers/cartSlice";
import { Link } from "react-router-dom";
import {counterAction} from "../store/reducers/counterSlice"

export default function Cart() {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const {decrease , clearAll} = counterAction
 
   


   const handleAddToCart = (product) => {
      dispatch(addToCart(product));
   };
   const handleDecreaseCart = (product) => {
      dispatch(decreaseCart(product));
      
   };
   const handleRemoveFromCart = (product) => {
      dispatch(removeFromCart(product));
      dispatch(decrease(1))
   };
   const handleClearCart = () => {
      dispatch(clearCart());
      dispatch (clearAll())
   };
   return (
      <div className="h-100 h-custom ">
         <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
               <div className="col-12 ">
                  <div className="card card-registration card-registration-2 ">
                     <div className="card-body p-0">
                        <div className="row g-0 ">
                           <div className="col-lg-8">
                              <div className="p-5">
                                 <div className="d-flex justify-content-between align-items-center mb-5 ">
                                    <h1 className="fw-bold mb-0 text-black">
                                       Shopping Cart
                                    </h1>
                                 </div>
                                 {cart.cartItems.length === 0 ? (
                                    <div className="cart-empty">
                                       <p>Your cart is currently empty</p>
                                       <div className="start-shopping">
                                          
                                       </div>
                                    </div>
                                 ) : (
                                    <div>
                                       {cart.cartItems &&
                                          cart.cartItems.map((cartItem) => (
                                             <div>
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                   <div className="col-md-2 col-lg-2 col-xl-2">
                                                      <img
                                                         src={cartItem.imgUrl}
                                                         className="img-fluid rounded-3"
                                                         alt={cartItem.productName}
                                                      />
                                                   </div>
                                                   <div className="col-md-3 col-lg-3 col-xl-3">
                                                      <h6 className="text-muted">
                                                         {cartItem.productName}
                                                      </h6>
                                                      <p>{cartItem.desc}</p>
                                                   </div>
                                                   <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                      <button
                                                         className="btn btn-link px-2"
                                                         onClick={() =>
                                                            handleDecreaseCart(
                                                               cartItem
                                                            )
                                                         }
                                                      >
                                                         
                                                      </button>

                                                      <div className="count mt-1">
                                                         {cartItem.cartQuantity}
                                                      </div>
                                                   </div>
                                                   <div className="col-md-1 col-lg-1 col-xl-1 offset-lg-1">
                                                      <div className="mb-0">
                                                         ${cartItem.price}
                                                      </div>
                                                   </div>
                                                   <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                      <button
                                                         className="btn btn-link px-2 remove"
                                                         onClick={() =>
                                                            handleRemoveFromCart(
                                                               cartItem
                                                            )
                                                         }
                                                      >
                                                        remove
                                                      </button>
                                                   </div>
                                                </div>

                                                <hr className="my-4" />
                                             </div>
                                          ))}
                                    </div>
                                 )}

                                 <div className="pt-5">
                                    <button
                                       className="btn clear-btn text-danger mb-2"
                                       onClick={() => handleClearCart()}
                                    >
                                       Clear Cart
                                    </button>
                                    
                                 </div>
                              </div>
                           </div>
                                 
                                 {/* <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">items 3</h5>
                      <h5>€ 132.00</h5>
                    </div> */}
                              
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

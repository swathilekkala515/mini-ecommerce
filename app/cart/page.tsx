"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [promo, setPromo] = useState("");

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCartItems(stored);
  }, []);

  const updateCart = (items: any[]) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const increaseQty = (index: number) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const decreaseQty = (index: number) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      updateCart(updated);
    }
  };

  const removeItem = (index: number) => {
    const updated = cartItems.filter(
      (_, i) => i !== index
    );
    updateCart(updated);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const discount =
    promo === "SAVE10" ? subtotal * 0.1 : 0;

  const finalTotal = subtotal - discount;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">
                  {item.title}
                </h2>
                <p>${item.price}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(index)}
                    className="px-2 bg-gray-300"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(index)}
                    className="px-2 bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-3 py-1"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Promo Code */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter Promo Code (SAVE10)"
              className="border p-2"
              onChange={(e) =>
                setPromo(e.target.value)
              }
            />
          </div>

          {/* Price Breakdown */}
          <div className="mt-4">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>
              DisAcount: ${discount.toFixed(2)}
            </p>
            <h2 className="font-bold text-lg">
              Final Total: ${finalTotal.toFixed(2)}
            </h2>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 bg-black text-white px-4 py-2"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

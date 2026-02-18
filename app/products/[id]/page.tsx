"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="p-8">Loading...</div>;

  const addToCart = () => {
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    existingCart.push({
      ...product,
      quantity,
    });

    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("Product added to cart!");
  };

  return (
    <div className="p-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-64"
      />

      <h1 className="text-2xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="mt-2 text-lg font-semibold">
        ${product.price}
      </p>

      <p className="mt-2">
        {product.description}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() =>
            setQuantity(Math.max(1, quantity - 1))
          }
          className="px-3 py-1 bg-gray-300"
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-1 bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={addToCart}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}


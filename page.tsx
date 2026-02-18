import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661597225498-fc96a97e2195?q=80&w=1031&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded">
        <h1 className="text-4xl font-bold mb-4">
          Mini E-Commerce Store
        </h1>

        <p className="text-lg mb-6">
          Discover trending products at best prices!
        </p>

        <Link
          href="/products"
          className="bg-white text-black px-6 py-3 rounded font-semibold"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

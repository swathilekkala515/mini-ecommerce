import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="font-bold text-xl">Mini E-Commerce</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}

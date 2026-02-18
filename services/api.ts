export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

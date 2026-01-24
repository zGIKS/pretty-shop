import Header from "@/components/header";
import Footer from "@/components/footer";
import { products } from "@/data/products";
import ProductCard from "@/components/landing/products/ProductCard";
import SearchBar from "@/components/landing/products/SearchBar";

export default function Productos() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-start">
          <SearchBar className="w-full max-w-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
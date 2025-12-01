import About from "@/components/about";
import ContactAlhabara from "@/components/contact";
import ProductGoon from "@/components/goon";
import Hero from "@/components/hero";
import ProductMontefiore from "@/components/montefiore";
import ProductNipiol from "@/components/nipiol";
import Products from "@/components/products";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <ProductNipiol />
      <ProductMontefiore />
      <ProductGoon />
      <ContactAlhabara />
    </>
  );
}

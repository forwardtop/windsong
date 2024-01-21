import React from "react";
import productData from "../data/product.json";
import {
  Header,
  LogoSection,
  StickyBackground,
  MostPopular,
  Product,
} from "../components";
import HeroVideo from "../components/HeroVideo";
function HomePage() {
  return (
    <div className="text-gray-600">
      <Header />
      <LogoSection />
      <StickyBackground />
      <MostPopular />
      <div className="flex justify-center items-center">
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-4">
          {productData.map((product) => (
            <div key={product.id} className="mb-4">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="text-blue-500 bg-white border border-solid border-blue-500 px-4 py-2 mt-4 hover:text-white hover:bg-blue-500 duration-300">
        SEE THE COMPLETE LIST
        </button>
      </div>

      <HeroVideo />
    </div>
  );
}

export default HomePage;

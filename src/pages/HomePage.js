import React from "react";
import productData from "../data/product.json";
import {
  Header,
  LogoSection,
  StickyBackground,
  MostPopular,
  Product,
} from "../components";
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
    </div>
  );
}

export default HomePage;

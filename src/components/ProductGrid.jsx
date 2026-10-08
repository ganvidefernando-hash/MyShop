import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products, onOrder, onDetails }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOrder={onOrder}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
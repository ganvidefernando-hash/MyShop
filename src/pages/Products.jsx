import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
import "./Products.css";

function Products({ onOrder, onDetails }) {
  return (
    <div className="products-page">

      <section className="products-hero">
        <span>MYSHOP</span>

        <h1>Nos produits</h1>

        <p>
          Découvrez toute notre sélection de produits pratiques
          et accessibles.
        </p>
      </section>

      <section className="all-products">

        <div className="catalog-header">
          <div>
            <span>CATALOGUE</span>
            <h2>Tous nos produits</h2>
          </div>

          <p>
            {products.length} produits disponibles
          </p>
        </div>

        <ProductGrid
          products={products}
          onOrder={onOrder}
          onDetails={onDetails}
        />

      </section>

    </div>
  );
}

export default Products;
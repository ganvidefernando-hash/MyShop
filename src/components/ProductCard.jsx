import "./ProductCard.css";

function ProductCard({ product, onOrder, onDetails }) {
  return (
    <article className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {product.featured && (
          <span className="product-badge">
            Populaire
          </span>
        )}
      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <strong className="product-price">
          {product.price.toLocaleString("fr-FR")} FCFA
        </strong>

        <div className="product-actions">

          <button
            className="details-button"
            onClick={() => onDetails(product)}
          >
            Voir le produit
          </button>

          <button
            className="order-button"
            onClick={() => onOrder(product)}
          >
            Commander
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;
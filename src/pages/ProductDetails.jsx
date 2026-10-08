import "./ProductDetails.css";

function ProductDetails({ product, onBack, onOrder }) {
  if (!product) {
    return null;
  }

  return (
    <div className="product-details-page">

      <div className="product-details-container">

        <button
          className="details-back"
          onClick={onBack}
        >
          ← Retour aux produits
        </button>

        <div className="product-details">

          <div className="details-image">
            <img
              src={product.image}
              alt={product.name}
            />

            {product.featured && (
              <span className="details-badge">
                Populaire
              </span>
            )}
          </div>

          <div className="details-content">

            <span className="details-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="details-price">
              {product.price.toLocaleString("fr-FR")} FCFA
            </div>

            <p className="details-description">
              {product.description}
            </p>

            <div className="details-info">

              <div>
                <strong>✓ Produit disponible</strong>
                <span>Commande rapide</span>
              </div>

              <div>
                <strong>✓ Livraison</strong>
                <span>Selon votre ville et votre quartier</span>
              </div>

              <div>
                <strong>✓ Paiement</strong>
                <span>Modalités confirmées lors de la commande</span>
              </div>

            </div>

            <button
              className="details-order-button"
              onClick={() => onOrder(product)}
            >
              Commander maintenant
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
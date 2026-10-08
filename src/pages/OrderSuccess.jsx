import "./OrderSuccess.css";

function OrderSuccess({ product, quantity, total, onHome, onProducts }) {
  return (
    <div className="success-page">
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="success-label">
          MYSHOP
        </span>

        <h1>Commande envoyée !</h1>

        <p className="success-message">
          Votre demande de commande a été préparée
          et envoyée sur WhatsApp.
        </p>

        <div className="success-summary">

          <div>
            <span>Produit</span>
            <strong>{product?.name}</strong>
          </div>

          <div>
            <span>Quantité</span>
            <strong>{quantity}</strong>
          </div>

          <div>
            <span>Total produit</span>
            <strong>
              {total?.toLocaleString("fr-FR")} FCFA
            </strong>
          </div>

        </div>

        <p className="success-note">
          MyShop vous contactera pour confirmer la commande
          et les frais de livraison.
        </p>

        <div className="success-actions">

          <button
            className="success-primary"
            onClick={onHome}
          >
            Retour à l'accueil
          </button>

          <button
            className="success-secondary"
            onClick={onProducts}
          >
            Continuer mes achats
          </button>

        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;
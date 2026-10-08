import { useState } from "react";
import "./OrderForm.css";

function OrderForm({ product, onBack, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    neighborhood: "",
    quantity: 1,
    deliveryPoint: "",
  });

  const quantity = Number(formData.quantity) || 1;
  const total = product.price * quantity;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Bonjour MyShop 👋

🛍️ NOUVELLE COMMANDE

Produit : ${product.name}
Quantité : ${quantity}
Prix unitaire : ${product.price.toLocaleString("fr-FR")} FCFA
Total : ${total.toLocaleString("fr-FR")} FCFA

👤 CLIENT
Nom : ${formData.name}
WhatsApp : ${formData.phone}

📍 LIVRAISON
Ville : ${formData.city}
Quartier : ${formData.neighborhood}
Lieu : ${formData.deliveryPoint}

Merci de confirmer ma commande et les frais de livraison.`;

    const whatsappNumber = "2290151614600";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
    onSuccess({
  product,
  quantity,
  total,
  });
  
  };

  return (
    <div className="order-page">

      <div className="order-container">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Retour à la boutique
        </button>

        <div className="order-header">
          <span>MYSHOP</span>

          <h1>Finaliser ma commande</h1>

          <p>
            Indiquez vos informations afin que nous
            puissions préparer votre commande.
          </p>
        </div>

        <div className="order-layout">

          {/* PRODUIT */}
          <div className="order-product">

            <img
              src={product.image}
              alt={product.name}
            />

            <div className="order-product-info">

              <span>{product.category}</span>

              <h2>{product.name}</h2>

              <p className="unit-price">
                {product.price > 0
                  ? `${product.price.toLocaleString(
                      "fr-FR"
                    )} FCFA`
                  : "Prix à confirmer"}
              </p>

            </div>

            {/* TOTAL */}
            <div className="order-summary">

              <div>
                <span>Prix unitaire</span>

                <strong>
                  {product.price.toLocaleString("fr-FR")} FCFA
                </strong>
              </div>

              <div>
                <span>Quantité</span>

                <strong>{quantity}</strong>
              </div>

              <div className="total-row">
                <span>Total</span>

                <strong>
                  {total.toLocaleString("fr-FR")} FCFA
                </strong>
              </div>

              <small>
                * Les frais de livraison seront confirmés
                séparément.
              </small>

            </div>

          </div>

          {/* FORMULAIRE */}
          <form
            className="order-form"
            onSubmit={handleSubmit}
          >

            <h2>Vos informations</h2>

            <div className="form-group">
              <label htmlFor="name">
                Nom complet
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom complet"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Numéro WhatsApp
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ex : 01 XX XX XX XX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="city">
                  Ville
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Ex : Cotonou"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="neighborhood">
                  Quartier
                </label>

                <input
                  id="neighborhood"
                  name="neighborhood"
                  type="text"
                  placeholder="Ex : Akpakpa"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">

              <label htmlFor="quantity">
                Quantité
              </label>

              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="deliveryPoint">
                Lieu de livraison
              </label>

              <textarea
                id="deliveryPoint"
                name="deliveryPoint"
                placeholder="Ex : devant le marché, près de..."
                value={formData.deliveryPoint}
                onChange={handleChange}
                required
              />

            </div>

            <button
              type="submit"
              className="order-submit"
            >
              💬 Envoyer ma commande sur WhatsApp
            </button>

            <p className="order-note">
              Votre commande sera envoyée directement
              à MyShop sur WhatsApp.
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default OrderForm;
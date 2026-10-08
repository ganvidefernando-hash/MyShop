import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home({ onOrder, onProducts, onHome, onDetails }) {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <div className="home">

      <Navbar
        onHome={onHome}
        onProducts={onProducts}
        onDetails={onDetails}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">BIENVENUE CHEZ MYSHOP</span>

          <h1>
            Les produits utiles,
            <span> simplement.</span>
          </h1>

          <p>
            Découvrez une sélection de produits pratiques pour votre
            quotidien, disponibles au Bénin avec livraison.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={onProducts}
            >
              Voir tous les produits
            </button>

            <a
              href="https://wa.me/2290151614600"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            🛍️
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="advantages">
        <div className="advantage">
          <div className="advantage-icon">🚚</div>
          <div>
            <h3>Livraison</h3>
            <p>Nous organisons votre livraison.</p>
          </div>
        </div>

        <div className="advantage">
          <div className="advantage-icon">💬</div>
          <div>
            <h3>Commande simple</h3>
            <p>Commandez facilement via WhatsApp.</p>
          </div>
        </div>

        <div className="advantage">
          <div className="advantage-icon">🔒</div>
          <div>
            <h3>Service fiable</h3>
            <p>Un contact direct pour votre commande.</p>
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section className="products-section" id="produits">
        <div className="section-header">
          <div>
            <span>NOTRE SÉLECTION</span>
            <h2>Produits populaires</h2>
          </div>

          <p>
            Découvrez les produits actuellement disponibles
            chez MyShop.
          </p>
        </div>

        <ProductGrid
          products={featuredProducts}
          onOrder={onOrder}
          onDetails={onDetails}
        />
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <span>UNE QUESTION ?</span>
          <h2>Vous recherchez un produit particulier ?</h2>
          <p>
            Contactez-nous directement sur WhatsApp et nous vous
            répondrons rapidement.
          </p>
        </div>

        <a
          href="https://wa.me/2290151614600"
          target="_blank"
          rel="noreferrer"
        >
          💬 Contacter MyShop
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>MyShop</strong>
          <p>
            Des produits utiles, accessibles et livrés au Bénin.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <a href="#produits">Produits</a>
          <a href="#produits">Nouveautés</a>
          <a href="https://wa.me/2290151614600">
            Contact
          </a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>WhatsApp : +2290151614600</p>
          <p>Bénin 🇧🇯</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
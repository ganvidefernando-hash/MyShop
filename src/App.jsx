import { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import OrderForm from "./pages/OrderForm";
import products from "./data/products";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const handleOrder = (product) => {
    setSelectedProduct(product);
    setCurrentPage("order");
    window.scrollTo(0, 0);
  };

  const handleHome = () => {
    setSelectedProduct(null);
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  const handleProducts = () => {
    setSelectedProduct(null);
    setCurrentPage("products");
    window.scrollTo(0, 0);
  };

  const handleDetails = (product) => {
  setSelectedProduct(product);
  setCurrentPage("details");
  window.scrollTo(0, 0);
  };

  const handleOrderSuccess = (data) => {
  setOrderData(data);
  setCurrentPage("success");
  window.scrollTo(0, 0);
  };

  if (currentPage === "success" && orderData) {
  return (
    <OrderSuccess
      product={orderData.product}
      quantity={orderData.quantity}
      total={orderData.total}
      onHome={handleHome}
      onProducts={handleProducts}
    />
  );
   }

  if (currentPage === "order" && selectedProduct) {
    return (
      <OrderForm
        product={selectedProduct}
        onBack={handleHome}
        onSuccess={handleOrderSuccess}
      />
    );
  }

  if (currentPage === "products") {
    return (
      <Products
        onOrder={handleOrder}
        onDetails={handleDetails}
      />
    );
  }
 
  if (currentPage === "details" && selectedProduct) {
    return (
      <ProductDetails
      product={selectedProduct}
      onBack={handleProducts}
      onOrder={handleOrder}
     />
   );
  }

  return (
    <Home
  onOrder={handleOrder}
  onProducts={handleProducts}
  onHome={handleHome}
  onDetails={handleDetails}
    />
  );

}
  
export default App;


import Category from "../components/cards/Category";
import Hero from "../components/Hero";
import NavClientside from "../components/NavClientside";
import ProductCategoriescard from "../components/cards/ProductCategoriescard";
import Suppliers from "../components/cards/Suppliers";
function ClientLanding() {
  return (
    <div>
      <NavClientside />;
      <Hero />
      <ProductCategoriescard />
      <Suppliers />
      <Category />
    </div>
  );
}

export default ClientLanding;

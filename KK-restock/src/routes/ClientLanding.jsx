import Category from "../components/cards/Category";
import Hero from "../components/Hero";
import ProductCategoriescard from "../components/cards/ProductCategoriescard";
import Suppliers from "../components/cards/Suppliers";
import Issue from "../components/Issue";

function ClientLanding() {
  return (
    <div>
      <Hero />
      <ProductCategoriescard />
      <Suppliers />
      <Category />
      <Issue />
    </div>
  );
}

export default ClientLanding;

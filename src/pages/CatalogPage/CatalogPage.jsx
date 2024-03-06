import CatalogCard from '../../components/Catalog/CatalogCard';
import CatalogFilterForm from '../../components/Catalog/CatalogFilterForm';

const CatalogPage = () => {
  return (
    <>
      <section>
        <CatalogFilterForm />
        <CatalogCard />
      </section>
    </>
  );
};

export default CatalogPage;

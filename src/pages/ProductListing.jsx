
import "../styles/ListingPage.css"
import Dropdown from "../components/Dropdown";
import { ProductListing } from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { products } from "../data/mockData";

function ListingPage() {
    return (

    <div className="Listing-Container">
        <div className="sub-container1">
            <h3>Resultados para todos os produtos - <span>{products.length} produtos</span></h3>
            <Dropdown />
        </div>
        <div className="sub-container2">
            <FilterGroup />
            <ProductListing />
        </div>
    </div>
 )
}

export default ListingPage;

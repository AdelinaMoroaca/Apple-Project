// import { defaults } from "lodash"
import { useState, useEffect } from "react";
import '../../App.css';
// import { StoreProduct } from "../StoreProduct";
import StoreProductList from "../StoreProductList";

function AppDemo(){
    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("http://localhost:3000/category")
        .then((response) => response.json())
        .then((data) => {
            setproductCategory(data)
        })
       
    }

    useEffect(() => {
        getAppleCategory();
    },[]);

    return <div className="app-content">
       {/* <ProdCategoryList/> */}
       {/* {
        productCategory.map((category) => (
            <div key={category.id}>{category.title}</div>
        ))
       } */}

       {/* <StoreProduct/> */}

       <StoreProductList category={category} />
    </div>
}
   
export default AppDemo
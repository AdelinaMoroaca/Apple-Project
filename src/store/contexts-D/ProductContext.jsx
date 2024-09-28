import { createContext, useState, useEffect } from 'react';

// import { addCollectionAndDocuments } from '../../utils/firebase/firebase';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

// import SHOP_DATA from '../../shop-data';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setProducts(categoryMap);
    }

    getCategoriesMap();

  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};


// import { createContext, useState, useEffect } from 'react';

// // import { addCollectionAndDocuments } from '../../utils/firebase/firebase';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

// // import SHOP_DATA from '../../shop-data';

// export const CategoriesContext = createContext({
//     categoriesMap: [],
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

// //   useEffect(() => {
// //     addCollectionAndDocuments('categories', SHOP_DATA);
// //   }, []);

//     useEffect(() => {
//         const getCategoriesMap = async () => {
//             const categoryMap = await getCategoriesAndDocuments();
//             console.log(categoryMap);
//             // setCategoriesMap(categoryMap);
//         }

//         getCategoriesMap();

//     }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
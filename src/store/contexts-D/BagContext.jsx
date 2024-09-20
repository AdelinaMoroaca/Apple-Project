import { createContext, useState } from "react";

const addBagItem = (bagItems, productToAdd) => {
    const existingBagItem = bagItems.find((bagItem) => bagItem.id === productToAdd.id);
    if(existingBagItem) {
        return bagItems.map((bagItem) => 
            bagItem.id === productToAdd.id 
                ? {...bagItem, quantity: bagItem.quantity + 1} 
                : bagItem
        );
    }

    return [...bagItems, {...productToAdd, quantity: 1}];
}

export const BagContext = createContext({
    isBagOpen: false, 
    setIsBagOpen: () => {},
    bagItems: [],
    addItemToBag: () => {},
});

export const BagProviderD = ({children}) => {
    const [isBagOpen, setIsBagOpen] = useState(false);    
    const [bagItems, setBagItems] = useState([]);
    const addItemToBag = (productToAdd) => {
        setBagItems(addBagItem(bagItems, productToAdd));
    }

    const value = {isBagOpen, setIsBagOpen, addItemToBag, bagItems};
    return (
        <BagContext.Provider value={value}>
            {children}
        </BagContext.Provider>
    )
}
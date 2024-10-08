import { createContext, useState, useEffect } from "react";

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

const removeBagItem = (bagItems, bagItemToRemove) => {
    const existingBagItem = bagItems.find((bagItem) => bagItem.id === bagItemToRemove.id);
    if(existingBagItem.quantity === 1) {
        return bagItems.filter((bagItem) => bagItem.id !== bagItemToRemove.id);
    }   
    return bagItems.map((bagItem) => 
        bagItem.id === bagItemToRemove.id 
            ? {...bagItem, quantity: bagItem.quantity - 1 } 
            : bagItem   
    );
}

const clearBagItem = (bagItems, bagItemToClear) => {
    return bagItems.filter((bagItem) => bagItem.id !== bagItemToClear.id);
}

export const BagContext = createContext({
    isBagOpen: false, 
    setIsBagOpen: () => {},
    bagItems: [],
    addItemToBag: () => {},
    removeItemFromBag: () => {},
    clearItemsFromBag: () => {},
    bagCount: 0,
    bagTotal: 0
});

export const BagProviderD = ({children}) => {
    const [isBagOpen, setIsBagOpen] = useState(false);    
    const [bagItems, setBagItems] = useState([]);
    const [bagCount, setBagCount] = useState(0);
    const [bagTotal, setBagTotal] = useState(0);

    useEffect(() => {
        const newBagCount = bagItems.reduce((total, bagItem) => total + bagItem.quantity, 0);
        setBagCount(newBagCount);
    }, [bagItems]);

    useEffect(() => {
        const newBagTotal = bagItems.reduce((total, bagItem) => total + bagItem.quantity * bagItem.basePrice, 0);
        setBagTotal(newBagTotal);
    }, [bagItems]);

    const addItemToBag = (productToAdd) => {
        setBagItems(addBagItem(bagItems, productToAdd));
    }

    const removeItemToBag = (bagItemToRemove) => {
        setBagItems(removeBagItem(bagItems, bagItemToRemove));
    }

    const clearItemFromBag = (bagItemToClear) => {
        setBagItems(clearBagItem(bagItems, bagItemToClear));
    }

    const value = {isBagOpen, setIsBagOpen, addItemToBag, removeItemToBag, clearItemFromBag, bagItems, bagCount, bagTotal};
    return (
        <BagContext.Provider value={value}>
            {children}
        </BagContext.Provider>
    )
}
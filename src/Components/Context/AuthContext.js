import { useState,createContext } from "react";
export const UserContext = createContext();
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cartItem,setCartItem] = useState([]);
    const [fil,setFil] = useState(Object);
    const [wishlist,setWishList] = useState([]);
    const [bag,setBag] = useState([]);
    return (
        <UserContext.Provider value={{ user,setUser ,cartItem,setCartItem,fil,setFil ,bag,setBag,wishlist,setWishList}}>
            {children}
        </UserContext.Provider>
    );
};

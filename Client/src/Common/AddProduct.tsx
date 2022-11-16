import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from '../Types/Users'

export const ProductContext = createContext<any | null>(null)

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {

    

    return(
        <ProductContext.Provider value={null}>
            {children}
        </ProductContext.Provider>
    )
}
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";


interface DataContextDataProps {
    children: ReactNode
}



export const CartContext = createContext({});
// export const CartContext = createContext<CartContextData>({} as CartContextData);


export function dataContextData({ children }: DataContextDataProps) {
    //importar os dados da api e formatar
}

export function useData() {
    const context = useContext(CartContext);

    return context;
}
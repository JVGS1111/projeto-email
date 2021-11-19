import { createContext, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";


interface DataContextDataProps {
    children: ReactNode
}

interface NavDataProps {
    id: number,
    name: string,
    subMenus?: {
        id: number,
        name: string,
    }[]
}

interface ContextData {
    navData: NavDataProps[]
}

export const DataContext = createContext<ContextData>({} as ContextData);


export function DataContextData({ children }: DataContextDataProps) {
    //importar os dados da api e formatar
    const [navData, setNavData] = useState<NavDataProps[]>([])

    useEffect(() => {
        api.get<any>('/workinideas/vagafrontendteste/menus')
            .then(res => {
                setNavData(res.data);
            }
            )
    })

    return <DataContext.Provider value={{ navData }}>
        {children}
    </DataContext.Provider>
}

export function useData() {
    const context = useContext(DataContext);

    return context;
}
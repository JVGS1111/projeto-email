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
    navData: NavDataProps[],
    emails: EmailsProps[],
    getEmails: (id: number) => void,
}


interface EmailsResProps {
    id: number,
    subMenuItems: {
        id: string,
        name: string,
        subject: string,
        owner: string,
        users: string[]
    }[]
}

interface EmailsProps {
    id: string,
    name: string,
    subject: string,
    owner: string,
    users: string[]
}



export const DataContext = createContext<ContextData>({} as ContextData);


export function DataContextData({ children }: DataContextDataProps) {
    //importar os dados da api e formatar
    const [navData, setNavData] = useState<NavDataProps[]>([])
    const [emails, setEmails] = useState<EmailsProps[]>([]);

    useEffect(() => {
        api.get<any>('/workinideas/vagafrontendteste/menus')
            .then(res => {
                setNavData(res.data);
            }
            )
    }, [])

    function getEmails(id: number) {
        //funcao retorna lista de email e insere no estado
        api.get<any>(`/workinideas/vagafrontendteste/items/${id}`)
            .then(res => {

                const response: EmailsResProps = res.data;

                setEmails(response.subMenuItems)
            })
    }




    return <DataContext.Provider value={{ navData, emails, getEmails }}>
        {children}
    </DataContext.Provider>
}

export function useData() {
    const context = useContext(DataContext);

    return context;
}
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
    cardCheckeds: string[],
    allCheckbox: boolean,
    getEmails: (id: number) => void,
    toggleAllCheckboxToFalse: () => void,
    toggleAllCheckboxToTrue: () => void,
    insertCard: (id: string) => void,
    removeCard: (id: string) => void,
    shelveEmail: () => void,
    eraseCardCheckeds: () => void,
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

// interface CardCheckeds {
//     id: number
// }

export const DataContext = createContext<ContextData>({} as ContextData);


export function DataContextData({ children }: DataContextDataProps) {
    //importar os dados da api e formatar
    const [navData, setNavData] = useState<NavDataProps[]>([])
    const [emails, setEmails] = useState<EmailsProps[]>([]);
    const [allCheckbox, setlAllCheckbox] = useState(false);
    const [cardCheckeds, setCardCheckeds] = useState<string[]>([]);
    const [archive, setArchive] = useState<EmailsProps[]>([]);


    useEffect(() => {
        api.get<any>('/workinideas/vagafrontendteste/menus')
            .then(res => {
                setNavData(res.data);
            }
            )
    }, [])

    function shelveEmail() {
        //a funcao abaixo remove os itens selecinados da caixa de entrada e popula o arquivo

        if (!cardCheckeds) {
            return
            //adicionar toast com mensagem informado falha
        }
        let newArquive: EmailsProps[] = []//arquivo
        let newEmails: EmailsProps[] = []//nova lista de emails

        newArquive = emails.filter(card => cardCheckeds.includes(card.id));
        newEmails = emails.filter(card => !cardCheckeds.includes(card.id));

        setArchive(newArquive);
        setEmails(newEmails);
    }

    function toggleAllCheckboxToFalse() {
        setlAllCheckbox(false)
    }

    function toggleAllCheckboxToTrue() {
        setlAllCheckbox(true)
    }

    function insertCard(id: string) {
        //setar no arr os ids para poder remover os salvos e depois comparar o tamanho para 
        //saber se tem algum checked
        setCardCheckeds((lastValue: any[]) => {
            return [...lastValue, id];
        })
    }

    function removeCard(id: string) {
        // console.log(id);
        // os tres card estao ao mesmo invocando a funcao e assim trabalhando com um estado atual e nao futuro
        let newArr = cardCheckeds.filter((item) => {
            return item !== id;
        })
        console.log(newArr);

        setCardCheckeds(newArr);
    }

    function eraseCardCheckeds() {
        setCardCheckeds([]);
    }


    function getEmails(id: number) {
        //funcao retorna lista de email e insere no estado
        api.get<any>(`/workinideas/vagafrontendteste/items/${id}`)
            .then(res => {

                const response: EmailsResProps = res.data;

                setEmails(response.subMenuItems)
            })
    }




    return <DataContext.Provider value={{ navData, emails, allCheckbox, getEmails, toggleAllCheckboxToFalse, toggleAllCheckboxToTrue, cardCheckeds, insertCard, removeCard, shelveEmail, eraseCardCheckeds }}>
        {children}
    </DataContext.Provider>
}

export function useData() {
    const context = useContext(DataContext);

    return context;
}
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useHistory } from "react-router";

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
    isLogged: boolean,
    getEmails: (id: number) => void,
    toggleAllCheckboxToFalse: () => void,
    toggleAllCheckboxToTrue: () => void,
    insertCard: (id: string) => void,
    removeCard: (id: string) => void,
    shelveEmail: () => void,
    eraseCardCheckeds: () => void,
    verifyLogin: (nome: string, senha: string) => void,
    logout: () => void,
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

    const [cardCheckeds, setCardCheckeds] = useState<string[]>([]);
    const [navData, setNavData] = useState<NavDataProps[]>([]);
    const [archive, setArchive] = useState<EmailsProps[]>([]);
    const [emails, setEmails] = useState<EmailsProps[]>([]);
    const [allCheckbox, setlAllCheckbox] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();

    useEffect(() => {
        api.get<any>('/workinideas/vagafrontendteste/menus')
            .then(res => {
                setNavData(res.data);
            }
            )
    }, []);

    function verifyLogin(nome: string, senha: string) {
        if (nome == 'admin' && senha == 'admin') {
            setIsLogged(true);
        } else {
            toast.error('Verifique seu nome e senha e tente novamente');
        }
    }

    function logout() {

        setIsLogged(false);
        history.push("/");
    }

    function shelveEmail() {
        //a funcao abaixo remove os itens selecinados da caixa de entrada e popula o arquivo

        if (!cardCheckeds) {
            toast.error('Nenhum email selecionado');
            return
        }
        let newArquive: EmailsProps[] = []//arquivo
        let newEmails: EmailsProps[] = []//nova lista de emails

        newArquive = emails.filter(card => cardCheckeds.includes(card.id));
        newEmails = emails.filter(card => !cardCheckeds.includes(card.id));

        toast.info('E-mails arquivados com sucesso!')
        setArchive(newArquive);
        setEmails(newEmails);
        setCardCheckeds([]);
    }

    function toggleAllCheckboxToFalse() {
        setlAllCheckbox(false)
    }

    function toggleAllCheckboxToTrue() {
        setlAllCheckbox(true)
    }

    function insertCard(id: string) {
        // a funcao adiciona ao array o card selecionado
        setCardCheckeds((lastValue: any[]) => {
            return [...lastValue, id];
        })
    }

    function removeCard(id: string) {
        //a funcao remove o card selecionado do array
        let newArr = cardCheckeds.filter((item) => {
            return item !== id;
        })

        setCardCheckeds(newArr);
    }

    function eraseCardCheckeds() {
        // a funcao remove todos os card de uma vez do array
        setCardCheckeds([]);
    }


    function getEmails(id: number) {
        //funcao retorna uma array de email e insere na lista 
        api.get<any>(`/workinideas/vagafrontendteste/items/${id}`)
            .then(res => {

                const response: EmailsResProps = res.data;

                setEmails(response.subMenuItems);
            })
    }




    return <DataContext.Provider value={{ logout, verifyLogin, isLogged, navData, emails, allCheckbox, cardCheckeds, getEmails, toggleAllCheckboxToFalse, toggleAllCheckboxToTrue, insertCard, removeCard, shelveEmail, eraseCardCheckeds }}>
        {children}
    </DataContext.Provider>
}

export function useData() {
    const context = useContext(DataContext);

    return context;
}
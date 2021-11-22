import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/dataContext";
import { EmailCard } from "../EmailCard";
import styles from './styles.module.scss';


export function EmailList() {
    const { id } = useParams<any>();
    const { getEmails, emails } = useData();

    useEffect(() => {
        if (id) {
            getEmails(id)
        }

    }, [id])

    return (

        <div className={styles.container}>
            {
                emails.map(email => {
                    return <EmailCard key={email.id} email={email} />
                })
            }

        </div>
    )
}
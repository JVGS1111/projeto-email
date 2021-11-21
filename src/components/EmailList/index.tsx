import { useParams } from "react-router-dom";
import { EmailCard } from "../EmailCard";
import styles from './styles.module.scss';

export function EmailList() {
    const { id } = useParams<any>();

    return (
        <div className={styles.container}>
            <EmailCard />
        </div>
    )
}
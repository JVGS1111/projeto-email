import { useParams } from "react-router-dom";
import styles from './styles.module.scss';

export function EmailList() {
    const { id } = useParams<any>();

    return (
        <div className={styles.container}>

        </div>
    )
}
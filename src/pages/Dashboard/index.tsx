import { PainelEmails } from "../../components/PainelEmails";
import { Sidebar } from "../../components/Sidebar";
import styles from './styles.module.scss';

export function Dashboard() {
    return (
        <main className={styles.dashboard}>
            <Sidebar />
            <PainelEmails />
        </main>
    )
}
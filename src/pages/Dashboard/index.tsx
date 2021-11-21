import { PainelEmails } from "../../components/PainelEmails";
import { Sidebar } from "../../components/Sidebar";
import styles from './styles.module.scss';
import { Route, Switch } from "react-router-dom";
import { EmptyListEmails } from "../../components/EmptyListEmails";
import { EmailList } from "../../components/EmailList";

export function Dashboard() {

    return (
        <main className={styles.dashboard}>
            <Sidebar />

            <main className={styles.mainContent}>
                <PainelEmails />
                <Switch>
                    <Route exact path='/dashboard'>
                        <EmptyListEmails />
                    </Route>
                    <Route path={`/dashboard/:id`}>
                        <EmailList />

                    </Route>
                </Switch>
            </main>
        </main>
    )
}
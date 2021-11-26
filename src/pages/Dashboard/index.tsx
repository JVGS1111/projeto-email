import { Route, Switch } from "react-router-dom";
import { PainelEmails } from "../../components/PainelEmails";
import { Sidebar } from "../../components/Sidebar";
import { EmptyListEmails } from "../../components/EmptyListEmails";
import { EmailList } from "../../components/EmailList";
import styles from './styles.module.scss';

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
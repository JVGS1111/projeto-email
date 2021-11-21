import styles from './styles.module.scss';

export function EmptyListEmails() {

    return (
        <div className={styles.email}>
            <p>Nenhuma conta selecionada</p>
        </div>
    )
}
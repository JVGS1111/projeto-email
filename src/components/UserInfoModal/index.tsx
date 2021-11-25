import styles from './styles.module.scss';
import common from '../../styles/common.module.scss';
import { useData } from '../../hooks/dataContext';

export function UserInfoModal() {

    const { logout } = useData()

    return (
        <div className={styles.userModal}>
            <span>user@email.com</span>
            <div className={styles.userStatusContainer}>
                <label className={styles.userStatus} />
                <label>Online</label>
            </div>
            <button onClick={logout} className={`${common.btn} ${styles.btnLogout}`}>Logout</button>
        </div>
    )
}

//implementar rota para tela de login no botao logout
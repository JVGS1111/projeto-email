import styles from './styles.module.scss';
import { FaFilter } from 'react-icons/fa'
import common from '../../styles/common.module.scss';
import { Checkbox } from '../Checkbox';

export function PainelTools() {
    return (
        <div className={styles.painelTools}>
            <div className={styles.searchbar}>
                <input type="text" placeholder="Pesquise" />
                <span className={styles.divisor} />
            </div>
            <div className={styles.painelButtons}>
                <div className={styles.buttons}>
                    <Checkbox />
                    <button className={`${common.btn} ${styles.btn}`}>Atribuir</button>
                    <button className={`${common.btn} ${styles.btn}`}>Arquivar</button>
                    <button className={`${common.btn} ${styles.btn}`}>Agendar</button>
                </div>
                <FaFilter className={styles.filter} />
            </div>
        </div >
    )//alterar a cor do icone dinamicamente
}
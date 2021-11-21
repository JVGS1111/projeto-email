import { useState } from 'react';
import styles from './styles.module.scss';
//implementar void function
export function Checkbox() {

    const [isChecked, setIsChecked] = useState(false)

    function toggleIsChecked() {
        setIsChecked(!isChecked);
    }
    return (
        <div className={styles.checkbox}>
            <input onClick={() => toggleIsChecked
            } id='checkbox1' type="checkbox" />
            <label htmlFor="checkbox1"></label>
        </div>
    )
}
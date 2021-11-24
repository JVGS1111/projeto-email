import { useEffect, useState } from 'react';
import { useData } from '../../hooks/dataContext';
import styles from './styles.module.scss';
//implementar void function
export function Checkbox() {

    const { allCheckbox, toggleAllCheckboxToFalse, toggleAllCheckboxToTrue } = useData();

    const [isChecked, setIsChecked] = useState(false);

    function toggleIsChecked() {
        setIsChecked(!isChecked);
    }
    useEffect(() => {
        if (isChecked) {
            toggleAllCheckboxToTrue();
        } else {
            toggleAllCheckboxToFalse();
        }
    }, [isChecked]);

    return (
        <div className={styles.checkbox}>
            <input onClick={toggleIsChecked
            } id="1" type="checkbox" />
            <label htmlFor="1"></label>
        </div>
    )
}
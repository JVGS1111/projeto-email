import { useEffect, useState } from 'react';
import { UsersImg } from '../UsersImg';
import styles from './styles.module.scss';

export function EmailCard() {

    const id = 20;
    const [isActive, setIsActive] = useState(false);

    const [checkboxCss, setcheckboxCss] = useState(styles.owner);

    useEffect(() => {
        if (isActive) {
            setcheckboxCss(styles.ownerActiver);
        } else {
            setcheckboxCss(styles.owner);
        }

    }, [isActive])

    function toggleIsChecked() {
        setIsActive(!isActive);
    }

    return (
        <div className={styles.card}>
            <div className={styles.part1}>
                <div className={checkboxCss}>
                    <span>JV</span>

                    <div className={styles.checkbox}>
                        <input onChange={toggleIsChecked} id={`checkbox${id}`} type="checkbox" />
                        <label htmlFor={`checkbox${id}`}></label>
                    </div>


                </div>
                <div className={styles.content}>
                    <span className={styles.name}>José Ronaldo</span>
                    <p className={styles.subject}>Boa tarde, como vai você ?</p>
                    <span className={styles.from}>Caixa de entrada</span>
                </div>
            </div>
            <div className={styles.part2}>
                <time>Hoje, 11:42</time>

                <span>30 min</span>
                <div className={styles.users}>
                    <UsersImg name={'JV'} />
                    <UsersImg name={'CG'} />
                    <UsersImg name={'SA'} />
                </div>

            </div>
        </div>
    );
}
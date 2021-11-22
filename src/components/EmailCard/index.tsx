import { useEffect, useState } from 'react';
import { useData } from '../../hooks/dataContext';
import { UsersImg } from '../UsersImg';
import styles from './styles.module.scss';

interface EmailProps {
    email: EmailProp
}

interface EmailProp {
    id: string,
    name: string,
    subject: string,
    owner: string,
    users: string[]
}

export function EmailCard({ email }: EmailProps) {


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
                    <span>{email.owner}</span>

                    <div className={styles.checkbox}>
                        <input onChange={toggleIsChecked} id={`checkbox${email.id}`} type="checkbox" />
                        <label htmlFor={`checkbox${email.id}`}></label>
                    </div>


                </div>
                <div className={styles.content}>
                    <span className={styles.name}>{email.name}</span>
                    <p className={styles.subject}>{email.subject}</p>
                    <span className={styles.from}>Caixa de entrada</span>
                </div>
            </div>
            <div className={styles.part2}>
                <time>Hoje, 11:42</time>

                <span>30 min</span>
                <div className={styles.users}>
                    {
                        email.users.map((user, index) => {
                            const left = 23 * index;
                            return <UsersImg name={user} left={left} />
                        })
                    }
                </div>

            </div>
        </div>
    );
}
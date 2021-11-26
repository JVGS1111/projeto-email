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

    const { allCheckbox, insertCard, cardCheckeds, removeCard, eraseCardCheckeds } = useData();

    const [checkboxCss, setcheckboxCss] = useState(styles.owner);
    const [globalCheck, setGlobalCheck] = useState(false)
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {


        if (globalCheck !== allCheckbox) {
            if (allCheckbox) {
                if (!isActive) {
                    setIsActive(!isActive);
                    insertCard(email.id);
                }
            } else {
                if (isActive) {
                    eraseCardCheckeds();
                    setIsActive(!isActive);
                }
            }
            setGlobalCheck(!globalCheck)
        }//este trecho de codigo verifica se o checkbox global esta ativo, se esiver ele ativa todos os outros e quando desativado desativa todos os checkbox
        //não está completo ainda. 

        if (cardCheckeds.length) {
            setcheckboxCss(styles.ownerActiver);
        } else {
            setcheckboxCss(styles.owner);
        }//este trecho de codigo verifica se existe algum checkbox ativo e musa o css para aparecer os demais checkbox

    }, [cardCheckeds, allCheckbox])


    function toggleIsChecked() {
        // a funcao abaixo altera altera o estado do checkbox, popula o array com os cards selecionados e remove quando desmarcados
        const newState = !isActive;

        if (newState) {
            setIsActive(newState);
            insertCard(email.id);
        } else {
            setIsActive(newState);
            removeCard(email.id);
        }

    }

    return (
        <div className={styles.card}>
            <div className={styles.part1}>
                <div className={checkboxCss}>
                    <span>{email.owner}</span>

                    <div className={styles.checkbox}>
                        <input onChange={toggleIsChecked} checked={isActive} id={`checkbox${email.id}`} type="checkbox" />
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
                            return <UsersImg key={index} name={user} left={left} />
                        })
                    }
                </div>

            </div>
        </div>
    );
}
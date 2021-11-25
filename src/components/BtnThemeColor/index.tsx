import { useState } from "react"
import * as Icon from 'react-icons/bs'
import { useData } from "../../hooks/dataContext";
import styles from './styles.module.scss';

export function BtnThemeColor() {

    const { toggleLight, light } = useData();

    return (
        <div onClick={toggleLight} className={styles.btn}>
            {
                !light ? <Icon.BsLightbulbOff size={35} /> : <Icon.BsFillLightbulbFill size={35} />
            }
        </div>

    )
}

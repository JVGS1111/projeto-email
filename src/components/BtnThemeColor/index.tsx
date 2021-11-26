import * as Icon from 'react-icons/bs'
import styles from './styles.module.scss';

interface BtnThemeColorProps {
    toggleLight: () => void;
    light: boolean
}

export function BtnThemeColor({ toggleLight, light }: BtnThemeColorProps) {

    return (
        <div onClick={toggleLight} className={styles.btn}>
            {
                !light ? <Icon.BsLightbulbOff color="white" size={35} /> : <Icon.BsFillLightbulbFill size={35} />
            }
        </div>

    )
}

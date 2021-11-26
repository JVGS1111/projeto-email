import styles from './styles.module.scss';

interface UsersImgProps {
    name: string;
    left: number;
}

export function UsersImg({ name, left }: UsersImgProps) {

    const css = {
        right: left,
        background: '#097bd8'
    }

    return (
        <div className={styles.user} style={css}>{name}</div>
    );
}


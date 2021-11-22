import styles from './styles.module.scss';

interface UsersImgProps {
    name: string;
    left: number;
}

export function UsersImg({ name, left }: UsersImgProps) {
    const css = {
        right: left,
        background: setBg()
    }

    function setBg() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;
    }

    return (
        <div className={styles.user} style={css}>{name}</div>
    );
}
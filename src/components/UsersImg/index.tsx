import styles from './styles.module.scss';

interface UsersImgProps {
    name: string;
}

export function UsersImg({ name }: UsersImgProps) {

    return (
        <div className={styles.user}>{name}</div>
    );
}
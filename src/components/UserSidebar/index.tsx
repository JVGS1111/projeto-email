import styles from './styles.module.scss';

export function UserSidebar() {
    return (
        <div className={styles.userSidbar}>
            <div className={styles.userImg}>JV <span className={styles.userStatus} /></div>
            <select name="new" id="new" placeholder="new">
                <option value="" disabled selected>New</option>
                <option value="email">e-mail</option>
                <option value="racunho">rascunho</option>
            </select>
        </div>
    )
}

// select:required:invalid {
//     color: gray;
//   }
//   option[value=""][disabled] {
//     display: none;
//   }
//   option {
//     color: black;
//   }
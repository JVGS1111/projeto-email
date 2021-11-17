import styles from './styles.module.scss';
import common from '../../styles/common.module.scss';
import { UserInfoModal } from '../UserInfoModal';
import { useState } from 'react';

export function UserSidebar() {

    const [userModal, setUserModal] = useState<boolean>(false);

    function toggleUserModal() {
        setUserModal(!userModal);
        console.log(userModal);

    }
    return (
        <div className={styles.userSidbar}>
            <div className={styles.userImg} onClick={toggleUserModal}>JV
                <span className={styles.userStatus} />
                {
                    userModal ? <UserInfoModal /> : ''
                }
            </div>
            <button className={`${styles.btnNewEmail} ${common.btn}`}>NEW</button>
            <span className={styles.divisor} />
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
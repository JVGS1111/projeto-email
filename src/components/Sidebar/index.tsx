import styles from './styles.module.scss';
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from '../SidebarData';
import { SidebarMenu } from '../SidebarMenu';
import { UserSidebar } from '../UserSidebar';

interface SidebarProps {
    title: string;
    path: string;
    icon: JSX.Element;
    iconClosed?: JSX.Element;
    iconOpen?: JSX.Element;
    subNav?: {
        title: string;
        path: string;
        icon: JSX.Element;
    }[]
}

export function Sidebar() {

    return (
        <>

            <div className={styles.sidebar}>
                <UserSidebar />
                <div className={styles.sidebarWraper}>
                    {
                        SidebarData.map((item: SidebarProps, index) => {
                            return <SidebarMenu item={item} key={index} />
                        })
                    }
                </div>
            </div>
        </>
    )
}



import styles from './styles.module.scss';

import { SidebarMenu } from '../SidebarMenu';
import { UserSidebar } from '../UserSidebar';
import { useData } from '../../hooks/dataContext';
import { BtnThemeColor } from '../BtnThemeColor';

interface SidebarProps {
    id: number,
    name: string,
    subMenus?: {
        id: number,
        name: string,
    }[]
}

export function Sidebar() {

    const { navData } = useData()
    return (
        <>

            <div className={styles.sidebar}>
                <UserSidebar />
                <div className={styles.sidebarWraper}>
                    {
                        navData.map((item: SidebarProps) => {
                            return <SidebarMenu item={item} key={item.id} />
                        })
                    }
                </div>
                <BtnThemeColor />

            </div>
        </>
    )
}



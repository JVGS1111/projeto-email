import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import { useState } from 'react';

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

interface sidebarmenuProps {
    item: SidebarProps
}
export function SidebarMenu({ item }: sidebarmenuProps) {

    const [subnav, setSubnav] = useState(false);

    function toggleShowSubnav() {
        setSubnav(!subnav);
    }

    return (
        <>
            <Link className={styles.sidebarLink} to={item.path} onClick={item.subNav && toggleShowSubnav}>
                <div >
                    {item.icon}
                    <span >{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpen
                        : item.subNav
                            ? item.iconClosed
                            : null
                    }
                </div>


            </Link>
            {subnav && item.subNav?.map((item, index) => {
                return (
                    <Link className={styles.dropdonwLink} to={item.path} key={index}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                )
            })}
        </>
    )
}
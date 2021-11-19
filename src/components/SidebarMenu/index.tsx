import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'


interface SidebarProps {
    id: number,
    name: string,
    subMenus?: {
        id: number,
        name: string,
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
            <Link className={styles.sidebarLink} to={'#'} onClick={item.subMenus && toggleShowSubnav}>
                <div >
                    <IoIcons.IoMdPeople />
                    <span >{item.name}</span>
                </div>
                <div>
                    {item.subMenus && subnav
                        ? <RiIcons.RiArrowDownCircleFill />
                        : item.subMenus
                            ? <RiIcons.RiArrowUpCircleFill />
                            : null
                    }
                </div>


            </Link>
            {subnav && item.subMenus?.map((item) => {
                return (
                    <Link className={styles.dropdonwLink} to={'#'} key={item.id}>
                        <IoIcons.IoIosPaper />
                        <span>{item.name}</span>
                    </Link>
                )
            })}
        </>
    )
}
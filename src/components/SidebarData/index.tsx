import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

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



export const SidebarData: SidebarProps[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownCircleFill />,
        iconOpen: <RiIcons.RiArrowUpCircleFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownCircleFill />,
        iconOpen: <RiIcons.RiArrowUpCircleFill />,
        subNav: [
            {
                title: 'Reports 1',
                path: '/overview/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 2',
                path: '/overview/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 3',
                path: '/overview/reports3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        iconClosed: <RiIcons.RiArrowDownCircleFill />,
        iconOpen: <RiIcons.RiArrowUpCircleFill />,
        subNav: [
            {
                title: 'Messages 1',
                path: '/overview/messages1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Messages 2',
                path: '/overview/messages2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Messages 3',
                path: '/overview/messages3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
    }
]

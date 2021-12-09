import React from 'react';
import { BsGrid } from "react-icons/bs";
import { BsMegaphone } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <BsGrid/>,
        link: '/dashboard'
      },
      {
        title: 'Campaigns',
        icon: <BsMegaphone/>,
        link: '/campaigns'
      },
      {
        title: 'Advertisers',
        icon: <BsBuilding/>,
        link: '/advertisers'
      },
      {
        title: 'Publishers',
        icon: <BsNewspaper/>,
        link: '/publishers'
      },
      {
        title: 'Managers',
        icon: <BsPeople/>,
        link: '/managers'
      },
      {
        title: 'Payment',
        icon: <BsCreditCard2Back/>,
        link: '/payment'
      }
];

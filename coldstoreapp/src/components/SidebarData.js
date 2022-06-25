import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SailingIcon from '@mui/icons-material/Sailing';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';


export const SidebarData = [
    {
       title: "Time",
       icon: <AccessTimeFilledIcon/>,
       link: "/time"

    },

    {
        title: "Deliveries",
        icon: <LocalShippingIcon/>,
        link: "/deliveries"
 
     },
     {
        title: "Shipment",
        icon: <SailingIcon/>,
        link: "/shipment"
 
     },
     {
        title: "Sales",
        icon: <MonetizationOnIcon/>,
        link: "/sales"
 
     },
     {
        title: "Coldstore",
        icon: <StorefrontIcon/>,
        link: "/coldstore"
 
     }


]

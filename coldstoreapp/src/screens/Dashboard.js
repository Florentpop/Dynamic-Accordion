import React from 'react';
import "../css/Sidebar.css";
import Sidebar from '../components/Sidebar';
import ColdStoreNavbar from '../components/ColdStoreNavbar';



function Dashboard() {
  return (
    <div>
   <ColdStoreNavbar/>
    <Sidebar/>
    </div>
  )
}

export default Dashboard;
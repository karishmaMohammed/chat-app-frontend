import React from 'react'
import "./MainStyles.css";
import SideBar from './SideBar';
import ChatArea from './ChatArea';
import WelcomePage from './WelcomePage';
import CreateGroups from './CreateGroups';
import Login from './Login';
import UsersGroups from './UsersGroups';
import { Outlet } from 'react-router-dom';



function MainContent() {
  return (
    <div className='main-content'>
     <SideBar />
     <Outlet />
     {/* <CreateGroups /> */}
     {/* < WelcomePage /> */}
    {/* <ChatArea /> */}
     {/* <UsersGroups /> */}
      {/* <Login /> */}
    </div>
  )
}

export default MainContent

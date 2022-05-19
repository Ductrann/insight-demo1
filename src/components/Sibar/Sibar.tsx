// import React from 'react'
import './Sibar.css'
// 
import { HomeIcon, TicketIcon, InVoiceIcon, SettingIcon, SearchIcon, MailIcon, NotificationIcon } from '../../assets/imgs/icons/navBarIcon'; 

const logo = require('../../assets/imgs/logo.png')

function Sibar(){
    return(
        <div className="Sibar">
            <div className="logo"></div>
            <div className="Frame">
                <ul id='nav'>
                    <li className='tag'><HomeIcon/><a href=''>Trang chủ</a></li>
                    <li className='tag'><TicketIcon/><a href=''>Quản lý vé</a></li>
                    <li className='tag'><InVoiceIcon/><a href=''>Đổi soát vé</a></li>
                    <li className='tag'><SettingIcon/><a href=''>Cài Đặt</a></li>
                    <li className='tag'><a href=''>Gói dịch vụ</a></li>
                </ul>
            </div>
            <div className='searchBar'>
                <input className='searchInput' placeholder='Search...'>
                </input>
                    <SearchIcon/>
            </div>
            <div className="user">
                <ul className="usericon"><MailIcon/></ul>
                <ul className="usericon"><NotificationIcon/></ul>
            </div>
        </div>
    );
}

export default Sibar;
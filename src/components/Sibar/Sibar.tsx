import React from 'react'
import './Sibar.css'
import { NavLink } from 'react-router-dom';
import Picture from "../../assets/imgs/Picture2.png"
import { HomeIcon, TicketIcon, InVoiceIcon, SettingIcon, SearchIcon, MailIcon, NotificationIcon } from '../../assets/imgs/icons/navBarIcon'; 

const logo = require('../../assets/imgs/logo.png')

function Sibar(){
    return(
        <div className="Sibar">
            <div className="logo"></div>
            <div className="Frame">
            <div  className='nav'>     
                    <NavLink className="tag" to="/"><HomeIcon /> Trang chủ</NavLink>
                    <NavLink className="tag" to="/Quanlyve"><TicketIcon />Quản lý vé</NavLink>
                    <NavLink className="tag" to="/DoiSoatVe">< InVoiceIcon/> Đổi soát vé</NavLink>
                    <NavLink className="tag" to="/DanhSachGoiVe"><SettingIcon /> Cài đặt</NavLink>
                </div> 
            </div>
            <div className='searchBar'>
                <input className='searchInput' placeholder='Search...'>
                </input>
                    <SearchIcon/>
            </div>
            <div className="user">
                    <NavLink to="/Mail"><MailIcon /></NavLink>
                    <NavLink to="/Bell"><NotificationIcon /></NavLink>
                    <img src={Picture} alt="User" />
            </div>
        </div>
    );
}

export default Sibar;
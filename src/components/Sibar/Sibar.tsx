import React from 'react'
import './Sibar.css'
import { NavLink, Routes, Route } from 'react-router-dom';
import Picture2 from "../../assets/imgs/Picture2.png"
import { HomeIcon, TicketIcon, InVoiceIcon, SettingIcon, SearchIcon, MailIcon, NotificationIcon } from '../../assets/imgs/icons/navBarIcon'; 
import Quanlyve from '../Quanlyve/Quanlyve';
import DanhSachGoiVe from '../Danhsachgoive/Danhsachgoive';

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
                    <NavLink className="tag" to="/Danhsachgoive"><SettingIcon /> Cài đặt</NavLink>
                </div> 
                
            </div>
            <Routes>
                <Route path="/" element={<HomeIcon/>}></Route> 
                <Route path="/Quanlyve" element={<Quanlyve/>}></Route>
          
                <Route path="/Danhsachgoive" element={<DanhSachGoiVe/>}> </Route>
          </Routes>
            <div className='searchBar'>
                <input className='searchInput' placeholder='Search...'>
                </input>
                    <SearchIcon/>
            </div>
            <div className="user">
                    <NavLink to="/Mail"className="Notify-Item Notify-Mail"><MailIcon /></NavLink>
                    <NavLink to="/Bell"className="Notify-Item Notify-Bell"><NotificationIcon /></NavLink>
                    <NavLink to="/profile"className="Notify-Item Notify-profile"><img src={Picture2} alt="" /></NavLink>
                </div>
        </div>
    );
}

export default Sibar;
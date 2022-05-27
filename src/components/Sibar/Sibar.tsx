import React from 'react'
import { Avatar, Layout, Menu } from "antd";
import { useNavigate } from 'react-router-dom';
import { HomeIcon, HomeIconActive, TicketICon, TicketIconActive, SettingIcon, 
    CheckTicketIcon, CheckTicketIconActive, MailIcon, SettingIconActive, BellIcon } from '../../assets/imgs/icons/navBarIcon'; 
import Search from "../../assets/imgs/icons/Search"


interface Props {
    children: React.ReactNode;
    tagIndex: string;
    setTagIndex: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const Sibar = ({ children, tagIndex, setTagIndex }: Props) => {
    const { Header, Sider } = Layout;
    const link = useNavigate();
    return (
      <Layout style={{ backgroundColor: "#F9F6F4" }}>
        <Sider
          width="251px"
          style={{
            backgroundColor: "#F9F6F4",
            margin: "16.5px 36px 0 33px",
          }}
        >
          <div className="logo">
            <img src="./logo.png" alt="logo" height="58px"></img>
          </div>
          <Menu
            style={{ backgroundColor: "#F9F6F4", border: "0", marginTop: "55px" }}
            mode="inline"
            selectedKeys={[tagIndex]}
          >
            <Menu.Item
              key="Trangchu"
              onClick={() => {
                link("/");
                setTagIndex("Trangchu");
              }}
            >
              {tagIndex === "Trangchu" ? <HomeIconActive /> : <HomeIcon />}
              Trang chủ
            </Menu.Item>
            <Menu.Item
              key="Quanlyve"
              onClick={() => {
                link("/Quanlyve");
                setTagIndex("Quanlyve");
              }}
            >
              {tagIndex === "Quanlyve" ? <TicketIconActive /> : <TicketICon />}
              Quản lý vé
            </Menu.Item>
            <Menu.Item
              key="Doisoatve"
              onClick={() => {
                link("/Doisoatve");
                setTagIndex("Doisoatve");
              }}
            >
              {tagIndex === "Doisoatve" ? (
                <CheckTicketIconActive />
              ) : (
                <CheckTicketIcon />
              )}
              Đối soát vé
            </Menu.Item>
            <Menu.Item
              key="Caidat"
              onClick={() => {
                link("/Caidat");
                setTagIndex("Caidat");
              }}
            >
              {tagIndex === "Caidat" ? <SettingIconActive /> : <SettingIcon />}
              Cài đặt
            </Menu.Item>
          </Menu>
          <div
            style={{
              paddingLeft: "12px",
              letterSpacing: "0.5px",
              marginTop: "-5px",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Gói dịch vụ
          </div>
        </Sider>
        <Layout
          style={{
            backgroundColor: "#F9F6F4",
            paddingRight: "24px",
            paddingBottom: "32px",
          }}
        >
          <Header
            className="site-layout-background"
            style={{
              height: "85px",
              backgroundColor: "#F9F6F4",
              padding: "0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Search size={tagIndex !== "home" ? "470px" : "438px"} />
            <div
              style={{
                paddingTop: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ marginRight: "24px" }}>
                <MailIcon />
              </span>
              <span style={{ marginRight: "24px" }}>
                <BellIcon />
              </span>
              <Avatar src="./Picture2.png" size={48} style={{ marginTop: "2px" }} />
            </div>
          </Header>
          {children}
        </Layout>
      </Layout>
    );
  };
  
  export default Sibar;
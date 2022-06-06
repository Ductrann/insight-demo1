import { Layout, Typography } from "antd";
import React, { useEffect } from "react";
import Home from "../Trangchu/trangchu"

interface Props {
    setTagIndex: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const Trangchu = ({ setTagIndex }: Props) => {
    useEffect(() => {
      setTagIndex("Trangchu");
    });
  
    return (
      <Layout.Content
        style={{
          borderRadius: "24px",
          minHeight: "963px",
          backgroundColor: "white",
          padding: "28.5px 24.5px",
        }}
      >
        {/* <Typography.Title style={{ fontSize: "36px", fontWeight: "700" }}>
          Thống kê
        </Typography.Title> */}
        <Home/>
      </Layout.Content>
    );
  };
  
  export default Trangchu;
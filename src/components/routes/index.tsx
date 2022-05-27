import React from "react";
import {Routes, Route} from "react-router-dom";
import Trangchu from "../Trangchu/index";
import Quanlyve from "../Quanlyve/index";
import Doisoatve from "../Doisoatve/index";
import Caidat from "../Caidat/index"



interface Props {
    setTagIndex: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const index = ({ setTagIndex }: Props) => {
    return (
      <Routes>
        <Route path="/" element={<Trangchu setTagIndex={setTagIndex} />} />
        <Route path="/Quanlyve" element={<Quanlyve setTagIndex={setTagIndex} />} />
        <Route path="/Doisoatve" element={<Doisoatve setTagIndex={setTagIndex} />} />
        <Route path="/Caidat" element={<Caidat setTagIndex={setTagIndex} />} />
      </Routes>
    );
  };
  
  export default index;
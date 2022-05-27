import './App.css';
import "antd/dist/antd.css";
import Router from "./components/routes/index";
import Sibar from './components/Sibar/Sibar';
import { useState } from "react";


const App = () => {
  const [tagIndex, setTagIndex] = useState("");
  return (
    <Sibar tagIndex={tagIndex} setTagIndex={setTagIndex}>
      <Router setTagIndex={setTagIndex} />
    </Sibar>
  );
};

export default App;

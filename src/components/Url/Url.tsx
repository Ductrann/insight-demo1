import { Routes, Route } from 'react-router-dom'
import Quanlyve from '../Quanlyve/Quanlyve';



function URL(){
    return(
     <Routes>
         
         <Route path="/Quanlyve" element={<Quanlyve/>} />
     </Routes>
    )
 }
 
 export default URL;
import "./Quanlyve.css"
import {SearchIcon, FilterIcon } from "../../assets/imgs/icons/navBarIcon"



function Quanlyve(){
    return(
        
         <div className="Quanly">
             <div className="DanhSach">
                 <h2>Danh Sách Vé</h2>
                 <div className="DanhSachVe">
                 <div className="search">
                     <input  type="text" placeholder='Search'  />
                     <a href="/"><SearchIcon /></a>
                  </div> 
                     <div className="DanhSachLocVe">
                         <div className="DanhSachLocVe1"><button className="LocVe" ><FilterIcon /> Lọc Vé</button></div>       
                         <div className="DanhSachLocVe1"><button className="XuatFile" > Xuất file(.csv)</button></div>
                     </div>
                 </div>
                 
                 <table className="table-danhsachve">
                 <thead>
                     <tr>
                         <th>STT</th>
                         <th>Booking code</th>             
                         <th>Số vé</th>
                         <th>Tên sự kiện</th>
                         <th>Ngày sử dụng</th>
                         <th>Ngày xuất vé</th>
                         <th>Cổng check-in</th>
                     </tr>
                 </thead>
                 </table>
 
             </div>
         </div>
    )
 }
 
 export default Quanlyve;
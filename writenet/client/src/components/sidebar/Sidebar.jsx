import "./sidebar.css"
import sidebarImage from "./sidebar-img.jpg"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats();
    }, [])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={sidebarImage} alt="" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maiores quo 
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
             <ul className="sidebarList">
                {cats.map((c, index) => (
                    <Link to={`/?cat=${c.name}`} className="link" key={index} >
                    <li  className="sidebarListItem">{c.name}</li>
                    </Link>
                    

                ))}
               
             </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}

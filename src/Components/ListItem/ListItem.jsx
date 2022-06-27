// import "./ListItem.css";
// import {
//   PlayArrow,
//   Add,
//   ThumbUpAltOutlined,
//   ThumbDownOutlined,
// } from "@mui/icons-material/";
// import { useState } from "react";

// export default function ListItem({ index }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const trailer =
//     "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
//   return (
//     <div
//       className="listItem"
//       style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img
//         src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
//         alt=""
//       />
//       {isHovered && (
//         <>
//           <div className="itemInfo">
//           <video src={trailer} autoPlay={true} loop />
//             <div className="icons">
//               <PlayArrow className="icon" />
//               <Add className="icon" />
//               <ThumbUpAltOutlined className="icon" />
//               <ThumbDownOutlined className="icon" />
//             </div>
//             <div className="itemInfoTop">
//               <span>1 hour 14 mins</span>
//               <span className="limit">+16</span>
//               <span>1999</span>
//             </div>
//             {/* <div className="desc">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Praesentium hic rem eveniet error possimus, neque ex doloribus.
//             </div> */}
//             <div className="genre">Action</div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

import React from 'react'
import { useState  , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"


const ListItem = ( props ) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setmovie] = useState(null);
  const {item } =props
// console.log(item.img);
//   useEffect(() => {
//     axios.get(`http://localhost:3001/movie/${props.item}`)
//   .then(function (response) {
//       setmovie(response.data)
//     //   console.log(response.data);
//     }).catch(function (error) {
//         console.log(error);
//     })
// }, []);

// useEffect(() => {
//     async function fetchData() {
//         const response = await axios.get(`http://localhost:3001/movie/${props.item}`)
//         setmovie(response.data)
        
//       }
//       fetchData();
// }, []);
  const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <>
            <div className="MovieBox"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                    <div className="img">
                        {!isHovered &&<img src={item.img} alt=""/>}
                        {isHovered && <video src={item.trailer} autoPlay={true} muted loop />}
                    </div>
                    <div className="text">
                        <h3>{item.title}</h3>
                        <span>{item.limit}</span>
                        <span style={{marginLeft:"40px"}}>{`(${item.year})`}</span>
                        <br/>
                    </div>
                    <Link to={`/watch/${item._id}`}>
                        <button className="primary-btn">
                            <i className="fa fa-play"></i> PLAY NOW
                        </button>
                    </Link>
            </div>
        </>
    )
}

export default ListItem
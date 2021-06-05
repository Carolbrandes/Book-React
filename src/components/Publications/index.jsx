import { useState } from "react";
import heart from "../../assets/heart.svg";
import like from "../../assets/like.svg";
import styles from "./styles.module.css";

export default ({ title }) => {
  const [numberOfHeart, setHeart] = useState(0)
  const [numberOfLike, setLike] = useState(0)


  const handleHeart = () => {
    console.log("heart")
  }

  const handleLike = () => {
    console.log("like")
  }


  return (
    <div className={`${styles.publication_wrapper} p-4`}>
      <h3 className={`${styles.publication_title} pb-3`}>{title}</h3>
    
   
   <div className="d-flex">
   <span className="d-flex align-items-center">
    {numberOfHeart} <img onClick={handleHeart} className="ps-1 pe-3 cursor-pointer" src={heart} alt="amei" />
    </span>
     <span className="d-flex align-items-center">
     {numberOfLike} <img onClick={handleLike} className="ps-1 cursor-pointer" src={like} alt="gostei" />
     </span>
   </div>
    </div>
  );
};

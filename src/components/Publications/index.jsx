import heart from "../../assets/heart.svg";
import like from "../../assets/like.svg";
import styles from "./styles.module.css";

export default ({ title, author }) => {
  return (
    <div className={`${styles.publication_wrapper} p-4`}>
      <h3 className={`${styles.publication_title} pb-3`}>{title}</h3>
      <p>{author}</p>

      <img className="pe-3" src={heart} alt="amei" />
      <img src={like} alt="gostei" />
    </div>
  );
};

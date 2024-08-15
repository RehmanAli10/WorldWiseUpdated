import styles from "./DropDown.module.css";

function DropDown({ options, handleClick }) {
  return (
    <div className={styles.dropDownContainer}>
      {options.map((currEle, index) => (
        <div className={styles.user} key={index}>
          <img src={currEle.userAvatar} alt="user-avatar" />
          <span>{currEle.userEmail}</span>
        </div>
      ))}
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default DropDown;

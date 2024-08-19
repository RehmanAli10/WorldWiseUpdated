import styles from "./DropDown.module.css";

function DropDown({ options, handleLogout }) {
  return (
    <div
      className={styles.dropDownContainer}
      onClick={(e) => e.stopPropagation()}
    >
      {options.map((currEle, index) => (
        <div className={styles.user} key={index}>
          <img src={currEle.userAvatar} alt="user-avatar" />
          <span>{currEle.userEmail}</span>
        </div>
      ))}

      <button onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  );
}

export default DropDown;

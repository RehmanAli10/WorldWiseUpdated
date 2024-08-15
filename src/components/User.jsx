import { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";
import ProfileIcon from "../public/profileIcon.jpg";

import styles from "./User.module.css";
import DropDown from "./DropDown";
import useClickOutside from "../hooks/useClickOutside";

function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useUser();
  const dropDownMenuRef = useRef(null);

  const options = [
    {
      userAvatar: user?.user_metadata.avatar_url
        ? user?.user_metadata.avatar_url
        : ProfileIcon,
      userEmail: user?.email,
    },
  ];

  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  function handleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  useClickOutside(dropDownMenuRef, isOpen, handleCloseMenu);

  return (
    <>
      {isOpen && <DropDown options={options} handleClick={handleLogout} />}
      <div className={styles.user}>
        <img
          src={
            user?.user_metadata.avatar_url
              ? user?.user_metadata.avatar_url
              : ProfileIcon
          }
          alt={user.name}
        />
        <span>Welcome, {user.email}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className={styles.threeDotsContainer}>
        <BsThreeDotsVertical onClick={handleDropDown} />
      </div>
    </>
  );
}

export default User;

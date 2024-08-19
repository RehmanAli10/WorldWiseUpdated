import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";
import ProfileIcon from "../public/profileIcon.jpg";

import styles from "./User.module.css";
import DropDown from "./DropDown";
import { useClickOutside } from "../hooks/useClickOutside";

function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useUser();
  const { ref } = useClickOutside(handleDropDownClose, false);

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

  function handleDropDownClose() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && <DropDown options={options} handleLogout={handleLogout} />}
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

      <div className={styles.threeDotsContainer} ref={ref}>
        <BsThreeDotsVertical onClick={handleDropDown} />
      </div>
    </>
  );
}

export default User;

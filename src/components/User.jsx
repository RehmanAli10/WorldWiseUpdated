import styles from "./User.module.css";
import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";
import ProfileIcon from "../public/profileIcon.jpg";

function User() {
  const { logout } = useLogout();
  const { user } = useUser();

  function handleClick(e) {
    e.preventDefault();
    logout();
  }

  return (
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
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

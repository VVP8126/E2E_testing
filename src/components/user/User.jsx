import React from "react";
import styles from "./User.module.css";

const User = ( { onDelete, user } ) => {
    return (
        <div className={styles.user_card}>
            <p className={styles.text_input}>{user.id}. {user.name}</p>
            <button id="del-user" onClick={() => onDelete(user.id)} className={styles.btn}>DELETE</button>
        </div>
    );
}
export default User;

import { useEffect, useState } from "react";
import User from "../components/user/User";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        () => {
            setIsLoading(true);
            fetch("http://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        setUsers(json);
                        setIsLoading(false);
                    }, 500)
                });
        },
        []
    );

    const onDelete = (id) => {
        setUsers(users.filter(user => (user.id !== id)));
    }

    return (
        <div className="user_list">
            <h1 className="centered margined">List of users</h1>
            { isLoading && <h3 className="centered" id="lbl-user-loading">Loading ...</h3> }
            { users.length > 0 &&
                <div id="userlist" className="margined">
                    { users.map(user => <User key={user.id} onDelete={onDelete} user={user} /> ) }
                </div>
            }
        </div>
    );
}
export default Users;

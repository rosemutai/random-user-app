import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/users/usersSlice";

const Users = () => {

const { users, isLoading, error } = useSelector((state) => state.users);
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(getUsers())
}, [])

if(isLoading) {
  return <div>Loading...</div>;
}

if(error) {
  return <div>Error getting Data</div>;
}

  return (
    <div>
      <ul className="users">
        {users.map((user, index) => {
          return (
          <li key={index}>
            {user.name.first} {user.name.last}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Users
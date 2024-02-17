import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
    .then(response => {
      setUsers(response.data.user)
    })
  }, [filter])
  return (
    <>
      <div className="font-bold text-lg mt-6">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full border px-2 py-1 rounded border-slate-300"
        ></input>
      </div>
     
       {users.map(user => <User user={user} key={user.id} />)}
      
    </>
  );
};

const User = ({user}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div className="rounded-full ml-4 flex items-center justify-center bg-slate-300 h-12 w-12 mt-1">
            <div className="flex flex-col justify-center h-full text-xl"> {user.firstName[0]}</div>
          </div>

          <div className="flex flex-col justify-center h-full ml-4 text-xl font-semibold">
            <div>{user.firstName} {user.lastName}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Button onClick={(e) => {
            navigate("/send?id=" + user._id + "&name" + user.firstName);

          }} label={"Send money"} />
        </div>
      </div>
    </>
  );
};

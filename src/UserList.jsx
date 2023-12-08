import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const UserList = ({}) => {
  const [listOfUser, setListOfUser] = useState(null);

  //
  const getUserList = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data))

      .catch((err) => console.log(err))
      .finally(() => {
        // setLoading(false);
      });
  };
  //Use effect function
  useEffect(() => {
    getUserList();
  }, []);

  /************************************** */
  return (
    <div className="max-w-5xl mx-auto ">
      <div className="grid grid-cols-3 gap-4">
        {/* {listOfUser?.map((items) => (
        <h3 key={items.id}>{items.username}</h3>
      ))} */}
        {listOfUser?.map((item) => (
          <UserCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

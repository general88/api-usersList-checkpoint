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
    <div className="max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listOfUser?.map((item) => (
          <UserCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import Pagination from "../components/pagination/Pagination";
import Users from "../components/users/Users";

const Home = () => {
  const usersURL = "http://js-assessment-backend.herokuapp.com/users.json";
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(usersURL);
      const data = await res.json();
      setLastPage(Math.ceil(data.length / 10));
      let limitedUsers = data.slice(page - 1, page + 9);
      return limitedUsers;
    };

    getUsers().then((allUsers) => {
      setUsers(allUsers);
    });
  }, [page]);

  return (
    <div className="page home">
      <Pagination page={page} lastPage={lastPage} setPage={setPage} />
      {users &&
        users.map((user) => (
          <Users
            key={user.id}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            date={user.created_at}
            status={user.status}
          />
        ))}
    </div>
  );
};

export default Home;

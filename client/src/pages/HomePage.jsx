import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import UserCard from "../components/UserCard";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/api/users/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.error) {
          return alert(data.error);
        }
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <>
      {isLoading && <p>loading...</p>}
      {users.length >= 1 &&
        users.map((user) => <UserCard key={user._id} user={user} />)}
    </>
  );
};

export default HomePage;

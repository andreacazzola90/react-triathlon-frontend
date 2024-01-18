import { useEffect, useState } from "react";

import Profile from "../utils/profilo-gare.json";
import TableProperty from "./TableProperty";
import { User } from "../context/UserContext";

const UserProfile = ({ id }: { id: string }) => {
  const [user, setUser] = useState<User>({});
  const apiUrl = import.meta.env.VITE_API_HOST + "users/" + id;
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data);
          console.log("test");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const gare = Profile.gare;

  return (
    <main className="">
      <div className="bg-black w-full flex flex-col items-center ">
        <img src="/the-running-lab-logo-white.svg" className="py-5 w-64"></img>
        <h1 className="text-3xl font-bold text-white uppercase">Report</h1>
      </div>

      <div className="profile flex flex-row gap-4 items-center justify-center py-5 uppercase">
        <div className="p-5 bg-white shadow">
          <span>
            <b>{user.name}</b>
          </span>
        </div>
        <div className="p-5 bg-white shadow">
          <span>
            <b>{user.surname}</b>
          </span>
        </div>
      </div>

      {/* <Property data={user}></Property> */}
      {gare.map((p) => (
        <TableProperty data={p}></TableProperty>
      ))}
    </main>
  );
};
export default UserProfile;

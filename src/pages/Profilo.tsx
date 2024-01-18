import UserProfile from "../components/UserProfile";
import { useParams } from "react-router-dom";

const Profilo = () => {
  const { id } = useParams();
  console.log(id);
  const idUser: string = id ? id : "";

  return (
    <main className="">
      <UserProfile id={idUser} />
    </main>
  );
};

export default Profilo;

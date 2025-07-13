import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession();

  return (
    <div className="home-container">
      <div className="card">
        <img src={session.user.image} alt="Avatar" className="avatar" />
        <h2>{session.user.name}</h2>
        <p>{session.user.email}</p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Home;

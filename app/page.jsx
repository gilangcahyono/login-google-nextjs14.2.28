import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession();

  return (
    <div>
      <LogoutButton />
      <h1>Welcome Back!</h1>
      <img src={session?.user?.image} alt="User avatar" width={50} />
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
};

export default Home;

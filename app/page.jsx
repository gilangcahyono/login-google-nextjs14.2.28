import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

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

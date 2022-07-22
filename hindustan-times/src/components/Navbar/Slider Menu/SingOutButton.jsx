import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../Context/AuthContext";

export default function SingOutButton() {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    await logOut();

    if (user.user == null) navigate("/");
  };

  return <Button onClick={handleSignOut}>Logout</Button>;
}

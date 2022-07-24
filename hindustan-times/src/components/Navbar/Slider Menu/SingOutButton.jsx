import { Button } from "@chakra-ui/react";
import { UserAuth } from "../../../Context/AuthContext";

export default function SingOutButton() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    await logOut();
  };

  return <Button onClick={handleSignOut}>Logout</Button>;
}

import React from "react";
import { useRouter } from "next/router";
const Player = () => {
  const router = useRouter();
  const playerName = router.query;
  console.log(playerName);
  return <div></div>;
};

export default Player;

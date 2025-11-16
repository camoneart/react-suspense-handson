import React from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AlwaysSuspend: React.FC = () => {
  throw sleep(1000);
};

export default AlwaysSuspend;

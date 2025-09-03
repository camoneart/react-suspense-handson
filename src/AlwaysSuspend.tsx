import { sleep } from "./utils/sleep";

const AlwaysSuspend = () => {
  console.log("AlwaysSuspend");
  throw sleep(1000);
};

export default AlwaysSuspend;

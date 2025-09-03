import { sleep } from "./sleep";

export async function fetchData1() {
  await sleep(Math.floor(Math.random() * 3000));
  return `Hello, ${(Math.random() * 3000).toFixed(0)}`;
}

import { fetchData1 } from "../utils/fetchData1";
import { useState } from "react";
import { sleep } from "../utils/sleep";

export const DataLoader: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  // ローディングフラグが立っていてdataがまだ無ければローディングを開始する
  if (loading && data === null) {
    sleep(500).then(() => setData("boom!"));
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  );
};

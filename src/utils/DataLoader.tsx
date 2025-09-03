import { Loadable } from "./Loadable";

const DataLoader = ({data}: {data: Loadable<string>}) => {
  const value = data.getOrThrow();

  return (
    <div>
      <p>Data is {value}</p>
    </div>
  )
}

export default DataLoader;
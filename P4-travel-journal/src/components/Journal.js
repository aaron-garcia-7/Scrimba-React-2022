import data from "../utils/data";

// Component(s)
import Location from "./Location";

const Journal = () => {
  return (
    <div>
      {data.map((obj) => (
        <Location key={obj.id} props={obj} />
      ))}
    </div>
  );
};

export default Journal;

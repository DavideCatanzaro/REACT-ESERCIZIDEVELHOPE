import { useMemo } from "react";

const Filteredlist = ({ list }) => {
  const filtered = useMemo(() => {
    return list.filter((el) => el.age >= 18);
  }, [list]);

  return (
    <div>
      {filtered.map((el) => (
        <div key={el.id}>
          <p>Name : {el.name}</p>
          <p>Age : {el.age}</p>
        </div>
))}
    </div>
  );
};
export default Filteredlist;
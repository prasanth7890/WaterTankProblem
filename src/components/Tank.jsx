import { useEffect, useState } from "react";

const Tank = ({ total }) => {
  const [water, setWater] = useState(0);

  const settle = () => {
    const timeout = setTimeout(() => {
      total.current = total.current / 4;
      setWater(total.current);
    }, 1000);

  };

  function addWater() {
    setWater(water + 200);
    total.current = total.current + 200;
    settle();
  }

  function emptyTank() {
    total.current = total.current - water;
    setWater(0);
    settle();
  }

  return (
    <div>
      {total.current}
      <button onClick={addWater}>ADD</button>
      <button onClick={emptyTank}>EMPTY</button>
      <div className="tank">{water}</div>
    </div>
  );
};

export default Tank;

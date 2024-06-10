import { useState, useEffect } from "react";

const Useeffects = () => {
  const [count, setCount] = useState(0);

  // function updateCount(){
  //   setCount(count+10)
  // }
  function counting() {
    setTimeout(() => {
      setCount(count + 1);
    }, 10);
  }
  return (
    <>
      <button onClick={counting}>start</button>
      {setCount}
      <button>stop</button>
      <button>reset</button> {count}
    </>
  );
};

export default Useeffects;

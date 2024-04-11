import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseNumber, increaseNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumeber);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="flex flex-col justify-center items-center h-[40%] w-[40%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="mb-8">
          <p className="text-xl">Increment/Decrement Counter in Redux</p>
        </div>
        <div>
          <button
            onClick={() => dispatch(increaseNumber())}
            className="bg-blue-500 text-white p-2"
          >
            Increment
          </button>
          <input type="text" className="border border-black m-4 w-10 text-center" value={myState} />
          <button
            onClick={() => dispatch(decreaseNumber())}
            className="bg-blue-500 text-white p-2"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

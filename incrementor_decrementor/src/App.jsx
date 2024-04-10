import React from "react";


const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="flex flex-col justify-center items-center h-[40%] w-[40%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <p className="text-xl">Increment/Decrement Counter in Redux</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white p-2">Increment</button>
          <input type="text" className="border border-black" value="0" />
          <button className="bg-blue-500 text-white p-2">Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default App;

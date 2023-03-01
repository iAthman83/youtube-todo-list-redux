import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import SingleTodoCard from "./SingleTodoCard";
const Card = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl rounded-lg p-2 items-center flex flex-col space-y-10 justify-between">
      <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
        <h1 className="text-3xl font-semibold underline">
          My Todo List for Today
        </h1>
        <div className="w-3/4">
          {toggle ? <AddTodoForm /> : <UpdateTodoForm />}
          {/* <AddTodoForm /> */}
          {/* <UpdateTodoForm /> */}
        </div>
        <div className="w-3/4">
          <SingleTodoCard />
        </div>
      </div>
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        onClick={() => setToggle(!toggle)}
      >
        Clear
      </button>
    </div>
  );
};

export default Card;

import { useState } from "react";
import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { toggleForm, deleteTodo } from "../store/features/todo/todoSlice";

const SingleTodoCard = (props) => {
  const dispatch = useDispatch();
  // const toggleComplete = useSelector((state) => state.todos.toggleComplete);
  const [toggleComplete, setToggleComplete] = useState(false);

  return (
    <div className="flex justify-between bg-red-100 py-2 rounded shadow">
      <div className="px-4">
        <h1
          className={
            toggleComplete ? "font-semibold line-through" : "font-semibold"
          }
        >
          {props.title}
        </h1>
      </div>
      <div className="px-4 flex space-x-4">
        <BsCheckSquare
          onClick={() => setToggleComplete(!toggleComplete)}
          className="cursor-pointer text-green-700"
          size={20}
        />
        <FaEdit
          onClick={() => dispatch(toggleForm())}
          className="cursor-pointer text-yellow-700"
          size={20}
        />
        <BsTrashFill
          onClick={() => dispatch(deleteTodo(props.id))}
          className="cursor-pointer text-red-700"
          size={20}
        />
      </div>
    </div>
  );
};

export default SingleTodoCard;

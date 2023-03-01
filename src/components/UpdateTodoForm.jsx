import { useState } from "react";

const UpdateTodoForm = () => {
  const [update, setUpdate] = useState("");
  return (
    <>
      <form className="flex space-x-3">
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Update"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateTodoForm;

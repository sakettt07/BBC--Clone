import { doc, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../firebase/setup";

const Comments = (props) => {
  const [comments, setComments] = useState("");


  const addComments = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, "Comments");
    try {
      await addDoc(commentsRef, { comments: comments });
      console.log("comment added successfully")
      setTimeout(() => {
        setComments("");
      }, 0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid pt-8 grid-rows-2">
      <label className="block pl-8 mb-5 text-[30px] font-semibold text-gray-900 dark:text-black">
        Add Comments
      </label>
      <div className="flex gap-5">
        <input
          onChange={(e) => setComments(e.target.value)}
          type="text"
          id="first_name"
          className="bg-gray-50 ml-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add Comments"
          required
        />
        <button
          onClick={addComments}
          className="bg-red-700 w-20 rounded-2xl hover:bg-red-400"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Comments;

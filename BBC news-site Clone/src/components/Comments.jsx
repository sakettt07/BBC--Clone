import { doc, addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../firebase/setup";
import { LiaCommentSolid } from "react-icons/lia";

const Comments = (props) => {
  const [comments, setComments] = useState("");
  const [newsComments, setNewsComments] = useState([]);

  const addComments = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, "Comments");
    try {
      await addDoc(commentsRef, {
        comments: comments,
        name: auth.currentUser.displayName,
        profileImg: auth.currentUser.photoURL,
      });
      console.log("comment added successfully");
      setTimeout(() => {
        setComments("");
      }, 0);
    } catch (error) {
      console.log(error);
    }
  };

  const showComments = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, "Comments");
    try {
      const data = await getDocs(commentsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNewsComments(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showComments();
  }, [newsComments]);

  return (
    <div className="grid pt-8 grid-rows-2">
      <label className="flex flex-row items-center gap-3 pl-8 mb-5 text-[30px] font-semibold text-gray-900 dark:text-black">
        Add Comments <LiaCommentSolid />
      </label>
      <div className="flex gap-5">
        <input
          onChange={(e) => setComments(e.target.value)}
          type="text"
          id="first_name"
          className=" ml-8 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5  dark:focus:ring-blue-500 bg-slate-200 dark:focus:border-blue-500"
          placeholder="Add Comments"
          required
        />
        <button
          onClick={addComments}
          className="bg-black w-20 text-white rounded-2xl hover:bg-red-400"
        >
          Add
        </button>
      </div>
      <div className="p-7 mt-9  overflow-hidden">
        <div
          className="max-h-[300px] overflow-hidden"
          style={{ overflowY: newsComments.length > 3 ? "auto" : "hidden" }}
        >
          {newsComments.map((data) => (
            <div
              key={data.id}
              className=" overflow-hidden flex flex-row items-center gap-3 mt-3 bg-[#d9d9d9] p-6"
            >
              <LiaCommentSolid />
              <p className="text-[18px] font-semibold">{data.comments}</p>
              <img src={data.photoURL} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;

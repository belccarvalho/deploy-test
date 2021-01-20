import React, { useContext } from "react";
import appContext from "./context";

export default function Posts() {
  const { postList } = useContext(appContext);

  return (
    <div className='container mt-5'>
      {postList.map((post) => {
        return (
          <div className='card mt-3 p-2 border-danger col-4'>
            <h5 className='card-title'>{post.name}</h5>
            <p className='card-text'>{post.job}</p>
          </div>
        );
      })}
    </div>
  );
}

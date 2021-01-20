import React, { useContext } from "react";
import appContext from "./context";
import axios from "axios";

export default function Add() {
  const { newPost, setNewPost } = useContext(appContext);
  const formHandler = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const addPost = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "users/add",
      data: newPost,
    })
      .then((res) => {
        console.log("post added", res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  return (
    <div className='container mt-5'>
      <form onSubmit={addPost}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={formHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Job
          </label>
          <input
            type='text'
            name='job'
            className='form-control'
            id='exampleInputPassword1'
            onChange={formHandler}
          />
        </div>
        <button type='submit' className='btn btn-danger'>
          Add Post
        </button>
      </form>
    </div>
  );
}

import React, { Component } from "react";
import Post from "./Post/Post";
import history from "../../utils/history";

const Posts = (props: any) => {
  if (props.posts === undefined) return <p>Loading</p>;

  //only show the posts of the profile being viewed hence we are already in profile view.
  const filteredPosts =
    history.location.pathname === "/profile"
      ? props.posts.filter(
          (i: any) => i.author._id === localStorage.getItem("view_profile")
        )
      : props.posts;

  return (
    <div>
      {filteredPosts.map(
        (item: {
          _id: string;
          comments: [];
          author: {
            name: string;
            _id: string;
          };
          content: string;
          title: string;
        }) => (
          <Post
            Name={item.author.name}
            Title={item.title}
            authorid={item.author._id}
            Content={item.content}
            submitComment={props.submitComment}
            _id={item._id}
            comments={item.comments}
            likePost={props.likePost}
            favoritePost={props.favoritePost}
            liked={props.liked}
            favorited={props.favorited}
            likeComment={props.likeComment}
            likedComment={props.likedComment}
            updateInfo={props.updateInfo}
          />
        )
      )}
    </div>
  );
};

export default Posts;

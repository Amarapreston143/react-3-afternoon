import React, { Component } from "react";
import axios from "axios";
import post from "./post/Post";

import "./App.css";

import Header from "./Header/Header";
import Compose from "./Compose/Compose";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/api/posts")
      .then((results) => {
        this.setState({ ports: results.data });
      });
  }

  updatePost(id, text) {
    axios
      .get(`https://practiveapi.devmountain.com/api/post?id=${id}`, { text })
      .then((results) => {
        this.setState({ ports: results.data });
      });
  }

  deletePost(id) {
    axios
      .post(`https://practiveapi.devmountain.com/api/post?id=${id}`)
      .then((results) => {
        this.setState({ posts: results.data });
      });
  }

  createPost(text) {
    axios
      .post(`https://practiveapi.devmountain.com/api/post?id=${id}`)
      .then((results) => {
        this.setState({ posts: results.data });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose creatPostFn={this.createPost} />
          {posts.map((elem) => (
            <Posts
              key={elem.id}
              text={elem.text}
              date={elem.date}
              id={post.id}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;

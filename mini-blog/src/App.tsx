import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import withLogger from "./components/withLogger";

const LoggedPostList = withLogger(PostList);

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <LoggedPostList />
    </div>
  );
};

export default App;

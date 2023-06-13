import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/About/About";
import Gallery from "./components/gallery/Gallery";
import Destionations from "./components/Destinations/Home";
import SinglePage from "./SinglePage/SinglePage";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle";
import Testimonail from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/gallery" exact component={Gallery}></Route>
        <Route path="/destination" exact component={Destionations}></Route>
        <Route path="/singlepage/:id" exact component={SinglePage}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/blogsingle/:id" exact component={BlogSingle}></Route>
        <Route path="/Testimonail" exact component={Testimonail}></Route>
        <Route path="/Contact Us" exact component={Contact}></Route>
        <Route path="/sign-in" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default App;

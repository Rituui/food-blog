import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import Contact from "./components/Contact";
import SingleBlog from "./components/SingleBlog";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Index}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/blogs" component={Blogs}></Route>
        <Route path="/createblog" component={CreateBlog}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/blogs/:id" component={SingleBlog}></Route>
      </Router>
    </div>
  );
}

export default App;

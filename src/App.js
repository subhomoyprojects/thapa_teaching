import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Blog from "./component/pages/Blog";
import Service from "./component/pages/Service";
import Error from "./component/pages/Error";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="service/:fname/:lname" element={<Service />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

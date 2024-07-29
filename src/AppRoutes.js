import {Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home/home";
import Projects from './Pages/Projects/Projects';
import About from './Pages/About';
const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />}/>
          </Routes>
    )
};

export default AppRoutes;
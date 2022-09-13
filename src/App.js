import { Routes, Route } from "react-router-dom";
import AngularComponent from "./components/renderProps/AngularComponent";
import ReactComponent from './components/renderProps/ReactComponent';
import VueComponent from "./components/renderProps/VueComponent";

function App() {

  return (
    <Routes>
        <Route path='/' element={<ReactComponent />} />
        <Route path='angular' element={<AngularComponent />} />
        <Route path='vue' element={<VueComponent />} />
    </Routes> 
  );
}

export default App;

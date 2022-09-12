import { Routes, Route } from "react-router-dom";
import AngularComponent from "./components/AngularComponent";
import ReactComponent from './components/ReactComponent';
import VueComponent from "./components/VueComponent";

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

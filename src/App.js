import { Routes, Route } from "react-router-dom";
import CardComponent from "./components/hoc/CardComponent";
import ListComponent from "./components/hoc/ListComponent";
import AngularComponent from "./components/renderProps/AngularComponent";
import ReactComponent from './components/renderProps/ReactComponent';
import VueComponent from "./components/renderProps/VueComponent";

function App() {

  return (
    <Routes>
        <Route path="render-props">
          <Route path='react' element={<ReactComponent />} />
          <Route path='angular' element={<AngularComponent />} />
          <Route path='vue' element={<VueComponent />} />
        </Route>
        <Route path="hoc">
          <Route path='list' element={<ListComponent />} />
          <Route path='card' element={<CardComponent />} />
        </Route>
    </Routes> 
  );
}

export default App;


import React from "react";
import GlobalStyles from "./GlobalStyles";
import Nav from "./components/nav";
import Home from "./pages/home";
import Home2 from "./pages/home2";

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
<Nav/>
<Routes>
<Route  path="/" element={<Home/>}/>
<Route path="/home2" element={<Home2/>}/>
</Routes>



 </div >
  );
}

export default App;

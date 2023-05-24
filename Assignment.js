import React from "react";
import  ReactDOM  from "react-dom";
import virtual from './virtual.png';

const root=ReactDOM.createRoot(document.getElementById("root"));

const ImageTag= ()=>(<img id="imageT"  src={virtual}></img>);

const Logo= ()=>(<h2 id="logo">My Logo</h2>);

const Heading= ()=> (<h1>
    <Logo/>
    <ImageTag/>
     </h1>);



root.render(<Heading/>);
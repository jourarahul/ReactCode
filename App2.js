import React from "react";
import ReactDOM from "react-dom";

const heading=React.createElement("h1",{},"My name is Rahul");
const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//jsx example
const heading1=<h1 className="head">Namaste Rahul Joura</h1>;

//React Functional Component Example
const Heading2=()=>(<h1 className="head">Namaste Rahul Joura</h1>);
//root.render(heading1);
const Heading = () => (<div id="container">
    <Heading2/>
    <h1>My name is Rohit</h1>
    </div>);
root.render(<Heading/>);

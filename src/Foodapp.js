import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Body from "./components/Body";


const Logo= ()=> {
   return (<h2 id="logo">My Logo 23242</h2>)
};


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
const heading=React.createElement("h1",{id:"heading1"},"Hello World from React");
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"heading"},"I am an H1 tag"),React.createElement("h2",{id:"heading"},"I am an H2 tag")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"heading"},"I am an H1 tag"),React.createElement("h2",{id:"heading"},"I am an H2 tag")]
)]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
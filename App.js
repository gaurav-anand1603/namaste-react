// const heading = React.createElement("h1",
// {id:"heading", xyz: "abc"},
// "Hello World from React"
// );

// console.log(heading); It is an object

//Nested Elements
// const parent = React.createElement("div", {id:"parent"},
//     React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"H1 Tag")
//     )
// );

// Sibling Elements

// const parent = React.createElement("div", {id:"parent"},
//     React.createElement("div",{id:"child"},[
//     React.createElement("h1",{},"H1 Tag"),
//     React.createElement("h2",{},"H2 Tag")
//     ]
//     )
// );

// Complex Structure

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
]);

const num = 1;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

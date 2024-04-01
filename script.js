// const heading = document.createElement("h1")
// heading.innerHTML="This is h1 using DOM"
// const root = document.getElementById("root")
// root.appendChild(heading)

// const heading = React.createElement("h1",{},"This is h1 object using react")
const root = ReactDOM.createRoot(document.getElementById("root"))
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("h1", {id:"child1"}, "h1 tag in div"),
    React.createElement("h2", {id:"child2"}, "h2 tag in div"),
])
root.render(parent)

console.log(React)
console.log(ReactDOM)
const header = React.createElement("h1",{id:"head",color:"red"},"Hello React");
//Call createElement to create a React element with the given type, props/attributes like id and class, and children(text/content / child elements/divs).

console.log(header);// will give an react element(NOT HTML TAG) which is a JS object at the end of the day.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);//the react element/js obj is passed to this render and it's job is to convert it to a actual html code that the browser understands.
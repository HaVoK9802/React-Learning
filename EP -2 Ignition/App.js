// //basic code for creating element:
// const header = React.createElement("h1",{id:"head",class:"red"},"Hello React");
// //Call createElement to create a React element with the given type, props/attributes like id and class, 
// //and children(text/content / child elements/divs).
// console.log(header);// will give an react element(NOT HTML TAG) which is a JS object at the end of the day.


// //if you want to create one more element inside the create element:
// const header = React.createElement("div",{id:"parent"},React.createElement("h1",{id:"child"},"nested reactCreate element"));
//                //returns react element which is a js object 

//if you want to create sibling elements (in the third children argument we should pass array of react elements):
const header = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"sibling1"},"sibling 1"),React.createElement("h1",{id:"sibling2"},"sibling 2")]));
               //returns react element which is a js object 

console.log(header);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);//the react element/js obj is passed to this render and it's job is to convert it to 
//a actual html code that the browser understands.
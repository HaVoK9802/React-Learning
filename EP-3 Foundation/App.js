import React from "react";
import ReactDOM from "react-dom/client";



const header1 = React.createElement("h1",{id:"core-react-syntax"},"React Element using core React Syntax");

//React.createElement() => React Element (JS Object) => obj rendered as HTML by ReactDOM's render(). 

// const header2 = <h1 id="jsx syntax">React Element using JSX</h1>;
const header2 = (<h1 id="jsx syntax">
    React Element using JSX
    </h1>);
  
//Babel under Parcel Transpiles JSX to React Code=> React.createElement() => React Element (JS Object) 
//                                                            => obj rendered as HTML by ReactDOM's render(). 


console.log(header1);
console.log(header2);

//JSX IS NOT HTML. IT IS HTML LIKE SYNTAX TO CREATE REACT ELEMENTS, it was developed because the conventional way of 
//creating React elements using React.createElement(1,2,3) becomes very hard to understand and maintain as the code grows.

//JSX is not part of pure JS i.e not an ECMAScript standard syntax. Your JS Engine does not understand JSX.

//functional components are js functions that return JSX/React Elements.
const TitleComponent = ()=>{
    return <h1>Main Title</h1>
}
const testReactElement=(<h1>Testing if passing in a react element to a {"curly brace"} in component works </h1>);

//component composition
const HeaderComponent = ()=>(
    <div className="parent">
        <TitleComponent/>
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {testReactElement}
        <h2>Side Title</h2>
        <h3>{"simple js expression"}</h3>
        <h3>{1+1}</h3>
        <h3>{(1<0)?"yes":"no"}</h3>
        <h3>{console.log("ewrv")}</h3>
    </div>
)
//js in JSX using curly braces
/*Where to use curly braces 
You can only use curly braces in two ways inside JSX:
1.As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. 
  Zara's To Do List</{tag}> will not.
2.As attributes immediately following the = sign: src={avatar} will read the avatar variable, 
  but src="{avatar}" will pass the string "{avatar}".
*/
/* to pass a JS object in JSX, you must wrap the object in another pair of curly braces: 
person={{ name: "Hedy Lamarr", inventions: 5 }}. */

// anything that enters the {} in jsx is sanitized. It is protected from cross side scripting attacks.
// const data = api.bad Call Which Has Malicious Code That Can run by some one else in your browser 
// in jsx {data} -> data is sanitized. 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
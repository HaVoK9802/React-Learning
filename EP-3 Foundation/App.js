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

const TitleComponent = ()=>{
    return <h1>Main Title</h1>
}

//component composition
const HeaderComponent = ()=>(
    <div className="parent">
        <TitleComponent/>
        <h2>Side Title</h2>
    </div>
)
//functional components are js functions that return JSX/React Elements.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
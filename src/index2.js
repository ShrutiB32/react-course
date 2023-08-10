import React from 'react';
import ReactDOM from 'react-dom';

// React Element : Is not a HTML element but it is a object ,It becomes an Element only when it is rendered to a DOM .
// We create an Element using React.createElement() which inturn gives us the object which becomes element only after rendering,i.e React.createElement => Object => HTMLElement(Render)

const heading = React.createElement("h1", {id:"heading"},"Namaste React 🚀");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

//here the object created by the createElement method is converted to html element by the ReactDom and is pushed into the DOM using renderer and IT WILL REPLACE EVERYTHING WHAT IS THERE IN THE DIV TAG WITH ROOT AS ID ,AND NOT APPEND IT

//But this becomes clumpsy to write html in js files so we use JSX

//JSX is not the part of react  it is different from react, we can write react without JSX but it seems messy so we use JSX

//how to create h1 tag using JSX

//JSX -is not HTML in js "it is the like html like syntax or XML like syntax"
//the above way to create react element is react core mtd
//the below mtd is using jsx


const jsxHeading = <h1 id="heading">Namaste REACT using JSX</h1>;  // this is the react element i.e an object 
const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(jsxHeading);

//is this above 1st line code valid javascript? Ans: this is kind off valid code and so not valid as it is not the pure core js and js engine will not understand this piece of code because it Js engine will understand ECMAScript i.e pure JS this is the languaage browserwill understand .IF we put this line of code {const jsxHeading = <h1 id="heading">Namaste REACT using JSX</h1>;} in the console we will get errors .

//but idf the js engine is not understanding this code who is doing it ? Ans Parcel is doing because the code we write is transpiled (means it converted to code that is understood by jsENgine) before it is going to JS engine. Parcel is not doing it byitself it is using "babel".Parcel is like the manager and Babel transpiles the code.[Babel is compiler]

//now the above code works as :JSX => React.createElement => Object => HTMLElement(Render)  .here JSX is converted to react element using createElement then to object and to html element. now who is converrting it to react.createElement? it is BABEL.

//LEARN ABOUT DIFF BETW COMPILER AND TRANSPILER-------------------


//next is if we want to give class to the element in JSX we just cannot write it as this "<h1 id="heading" class="head">Namaste REACT using JSX</h1>"  we need to give it as "<h1 id="heading" className="head">Namaste REACT using JSX</h1>" thisis the key difference between and watever attributes we write to elements in JSX it should be "CamelCase" , But after transpiling it gets converted to normal class.

//EXPLORE DIFFERENT WAYS TO WRITE ATTRIBUTE FOR TAGS IN JSX-------------------------

//Single line and multi line 
//here in the above code if we write it in single line[i.e const jsxHeading = <h1 id="heading">Namaste REACT using JSX</h1>; ] then it is perfectly fine .but if we want to write it in multi line then we need to use round brackets [i.e 
// const jsxHeading = (<h1 id="heading">            
// Namaste REACT using JSX                                                                                                                         
// </h1>); 
// ]
//even this is valid "const jsxHeading = (<h1 id="heading">Namaste REACT using JSX</h1>)"

// REACT COMPONENTS
// what is a component or react component ?
// everything id the component for ex: title , input , button,card etc 
//In react components are of 2 types :
// - class Based component - it is the old way of writing component  .They use class to create the components
// - Functional component - it is new way of writing component ,They use js functions to create components.--It is just a normal javascript function.--Whenever we write functional components we should write the first letter in capital

//example for functional component - it returns the JSX element/component/code

const HeadingComponent = () => {
    return <h1>Namaste Functional Component</h1>;
}





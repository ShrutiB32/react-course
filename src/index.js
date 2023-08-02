// this was in simple js for inserting h1 tag in the div element with id root 
// const rootElement= document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML= "Hello world!";
// rootElement.appendChild(heading);

// writing the same above code in REACT

// here createElement takes 3 parameters 1st parameter is the name of the tag ,2nd parameter is the object where we give attributes in the form of key value pairs to the tags,3rd parameter is the text to be inserted

// CREATEELEMENT always returns an OBJECT
const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");

// If we try to console.log the heading which is created using react.createElement we wont get an element but we will get and object with type,props,key as keys in it.
// here props has children and attributes
// AT the end heading is the React element which at the end is the javascript object
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// here render takes this headidng or javascript object creates the elemnt/tag which is understood by the browser and puts it in the root i.e DOM
root.render(heading);




//CREATING NESTED HTML USNG REACT
/*
    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>
*/

// const parent = React.createElement('div', {id: 'parent'});
// const child = React.createElement('div', {id: 'child'});
// const headingTag = React.createElement("h1", {id: 'headingTag'},"heading");

// instead of writing as above we can do it has below 
// In the below code we are creating the elements in the children attribute of the creatElement mtd

const parent = React.createElement("div", {id: 'parent'},
                React.createElement("div", {id: 'child'},
                React.createElement("h1",{}, "Heading")));

console.log(parent)

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);

// wat if we have more siblings in the div with id child i.e 2 h1 tags in div, then in above code we can pass it as array of children i.e   [React.createElement("h1",{}, "Heading"), React.createElement("h1",{}, "Heading2")]

// but this will throw error to specify key for these array of children , (SOLVED LATER)

// const parent = React.createElement("div", {id: 'parent'},
//                 React.createElement("div", {id: 'child'},
//                 [React.createElement("h1",{}, "Heading"), React.createElement("h1",{}, "Heading2")]));


//--> This makes the code messy so we use JSX instead ,we wont be using the above mtd


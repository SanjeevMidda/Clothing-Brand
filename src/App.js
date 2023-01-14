// Importing all components to add into our "App" component getting prepared for rendering. Added item data from "items" to use in our map method.
import "./index.css";
import Header from "./components/Header";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import Items from "./Items";

// Function created to pass all data from our "Items" object into the component. Function used for our map method. 
// This solves having to re-write several times each item to pass as props.
function addItem(Items){
  return (<Product
  img = {Items.img}
  name = {Items.name}
  size = {Items.size}
  price = {Items.price}
  />
  );
}

// All components and elements to render later will be added inside our "App" component.
function App() {
  return (

    // Container created to style using css flexbox. Page divided into ".top" and ".bottom" sections for easier styling.
    <div className="container">
      <div className="top">

        <div className="logo">

        {/* Boolean value of "false" passed as prop to our Header component. Component will use this value to decide if the user has logged in or not. */}
        <Header 
          log = {false}
        />
        </div>
    
        {/* Model photo */}
        <img src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" alt ="model pose"></img>

        <AboutUs />

      </div>

      <div className="bottom">

          {/* Map method used to loop over the products in our "Items" objects, and inserted into an element by the component. */}
          {Items.map(addItem)}
      </div>
      
    </div>
  );
}

// So we can pass this to our "index.js" file later ready to render.
export default App;

import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Recommended from './Components/Recommended';
import { useState } from "react"
import products from './db/data.js'
import Products from './Components/Products.js';

function App() {
  const[inputValue, setInput] = useState("")

  const[selectedValue, setSelectedValue] = useState("")

  function handleInputchange(event) {
    setInput(event.target.value)
  }

  const filteredItems =  products.filter((product) => (
    product.title.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
  ))


  function handleClickChange(event) {
    setSelectedValue(event.target.value)
    console.log(selectedValue)
  }


  function filterProducts(products, inputValue) {

    var Products = products
    
    if(inputValue) {
      Products = filteredItems
    }
    return Products.map((product) => (
      <Card
             img={product.img} 
             title={product.title}
             star={product.star}
             reviews={product.reviews}
             prevPrice={product.prevPrice}
             newPrice={product.ne}
      />
    ))
    }

    const result = filterProducts(products, inputValue)

  
  
  return (
    <div className="App">
      <Header value={inputValue} handleInputchange={handleInputchange} />
      <Nav />
      <Recommended handleClickChange={handleClickChange} />
      <Products result={result} />
    </div>
  );
}

export default App;

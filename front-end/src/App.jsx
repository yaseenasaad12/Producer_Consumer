import React, { useState } from 'react';
import Header from './header'
import ControlPanel from './ControlPanel';
import SimulationArea from './SimulationArea';
import Footer from './footer'


const App = () => {
  const [products, setProducts] = useState(0);
  const [shapes, setShapes] = useState([]);

  const incrementProducts = () => setProducts(products + 1);
  const decrementProducts = () => {
    if (products > 0) setProducts(products - 1);
  };
  const clearShapes = () => setShapes([]);
  const simulate = () => {
    // Logic to start simulation
  };
  const resimulate = () => {
    // Logic to reset and start simulation
  };
  const endSimulation = () => {
    // Logic to end simulation
  };

  return (
    <div>
      <Header products={products} increment={incrementProducts} decrement={decrementProducts} />
      <ControlPanel
        simulate={simulate}
        resimulate={resimulate}
        endSimulation={endSimulation}
        clearShapes={clearShapes}
      />
      <SimulationArea shapes={shapes} setShapes={setShapes} />
      <Footer/>
    </div>
  );
};

export default App;
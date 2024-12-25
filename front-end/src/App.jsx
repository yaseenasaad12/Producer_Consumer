import React, { useState } from 'react';
import Header from './header';
import ControlPanel from './ControlPanel';
import SimulationArea from './SimulationArea';

const App = () => {
  const [products, setProducts] = useState(0);
  const [shapes, setShapes] = useState([]);

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header products={products} setProducts={setProducts} />
      <div style={{ display: "flex", flex: "1" }}>
        <ControlPanel
          simulate={simulate}
          resimulate={resimulate}
          endSimulation={endSimulation}
          clearShapes={clearShapes}
        />
        <SimulationArea shapes={shapes} setShapes={setShapes} />
      </div>
    </div>
  );
};

export default App;

import './App.css';
import { Grid } from 'gridjs-react';
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import "gridjs/dist/theme/mermaid.css";

function App() {

  // new gridjs.Grid({
  //   columns: { "id", "nombre"},
  //   data: ["1", "aaron"]
  // }).render(document.getElementById("table"));

  // const grid = new Grid({
  //   columns: ['Name', 'Email', 'Phone Number'],
  //   data: [
  //     ['John', 'john@example.com', '(353) 01 222 3333'],
  //     ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  //   ]
  // }).render(document.getElementById("table"));

  const row = () => [faker.name.findName(), faker.internet.email()];
  const [data, setData] = useState([row()]);
  const update = () => {
    setData(data.slice(0).concat([row()]));
  }

  // return (
  //   <div className="App">
  //     <div id='table'>

  //     </div>
  //   </div>
    
  // );
  return (
    <div>
      <button onClick={update.bind(this)} className={"py-2 mb-4 px-4 border rounded-md text-white bg-blue-600"}>
        Add record
      </button>
      
      <Grid
        data={data}
        columns={['Name', 'Email']}
        pagination={{
          limit: 5,
        }}
      />
    </div>

    
  );
}

export default App;

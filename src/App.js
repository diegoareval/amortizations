import React, { useState } from "react";
import Table from "./components/table";
import { calculateAmortization } from "./helpers";
import Navbar from "./layouts/Navbar";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [payments, setPayments] = useState([]);

  const calcularCuota = () => {
    if(amount<=0) return;
    if(rate<=0) return;
    if(time<=0 || time>100) return;
    calculateAmortization(amount, rate, time)
    .then(result => {setPayments(result); })
    .catch(error => { console.log(error); });
  }
 

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <h2>Calcular amortización</h2>
          <div className="form-group">
            <label for="monto">Monto</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Ingresa monto"
            />
          </div>
          <div className="form-group">
            <label for="tiempo">Tiempo</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              id="tiempo"
              placeholder="Ingresa tiempo"
            />
          </div>
          <div className="form-group">
            <label for="interes">Interés</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRate(e.target.value)}
              id="interes"
              value={rate}
              placeholder="Ingresa interés"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => calcularCuota()}
          >
            Calcular
          </button>
        </div>
        <div className="col-6">
          <Table payments={payments}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;

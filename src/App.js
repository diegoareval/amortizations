import React, { useState } from "react";
import Table from "./components/table";
import { calculateAmortization, getSum } from "./helpers";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import "./App.css";
import Input from "./shared/Input";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [payments, setPayments] = useState([]);

  const calcularCuota = () => {
    if (amount <= 0) return;
    if (rate <= 0) return;
    if (time <= 0 || time > 100) return;
    calculateAmortization(amount, rate, time)
      .then((result) => {
        setPayments(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "9vh" }}>
        <div className="row mt-3">
          <div className="col-6">
            <h2>Calcular amortización</h2>
            <Input
              value={amount}
              label="Monto"
              onChange={setAmount}
              placeholder="Ingresa monto"
            />
            <Input
              value={time}
              label="Tiempo"
              onChange={setTime}
              placeholder="Ingresa tiempo"
            />
            <Input
              value={rate}
              label="Interés"
              onChange={setRate}
              placeholder="Ingresa interés"
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => calcularCuota()}
            >
              Calcular
            </button>
          </div>
          <div className="col-6">
            <div className="table-container">
              <Table payments={payments} />
            </div>
            <div>
              <div>
                Total a pagar:{" "}
                {parseFloat(getSum(payments, "share")).toFixed(2)}
              </div>
              <div>
                Total Intereses:{" "}
                {parseFloat(getSum(payments, "rate")).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

import React, { useState } from "react";
import Table from "../components/table";
import { calculateAmortization, getSum } from "../helpers";
import { ALERT_TYPES, smallAlert } from "../lib/alert";
import Input from "../shared/Input";
import "./home.css";


const Home = () => {
  const [amount, setAmount] = useState(null);
  const [time, setTime] = useState(null);
  const [rate, setRate] = useState(null);
  const [payments, setPayments] = useState([]);

  const calcularCuota = () => {
    if (amount <= 0) {
        smallAlert(ALERT_TYPES.INFO, "Debes ingresar un monto valido");
        return;
    }
    if (rate <= 0) {
        smallAlert(ALERT_TYPES.INFO, "Debes ingresar una taza de interes valida");
        return;
    }
    if (time <= 0 || time > 100) {
        smallAlert(ALERT_TYPES.INFO, "Debes ingresar un tiempo en meses valido");
        return;
    }
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
      <div className="container" style={{ marginTop: "10vh" }}>
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
              placeholder="Ingresa tiempo en meses"
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
    </>
  );
};

export default Home;

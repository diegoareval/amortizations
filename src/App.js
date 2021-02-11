import moment from "moment";
import React, { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [payments, setPayments] = useState([]);

  function calcularCuota(monto, interes, tiempo) {
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, "month");

    let pagoInteres = 0,
      pagoCapital = 0,
      cuota = 0;

    cuota = (monto * ((Math.pow(1 + interes / 100, tiempo) * interes) / 100)) / (Math.pow(1 + interes / 100, tiempo) - 1);
    let toPay = [];
    for (let i = 1; i <= tiempo; i++) {
      pagoInteres = parseFloat(monto * (interes / 100));
      pagoCapital = cuota - pagoInteres;
      monto = parseFloat(monto - pagoCapital);

      //Formato fechas
      fechas[i] = mes_actual.format("DD-MM-YYYY");
      mes_actual.add(1, "month");
      console.log(fechas[i]);
      console.log(monto.toFixed(2));
      const payload = {
        date: fechas[i],
        share: cuota.toFixed(2),
        capital: pagoCapital.toFixed(2),
        rate: pagoInteres.toFixed(2),
        amount: monto.toFixed(2),
      };
      toPay.push(payload);
    }
    setPayments(toPay);
  }

  return (
    <div class="container">
      <div class="row mt-3">
        <div class="col-6">
          <h2>Calcular amortización</h2>
          <div class="form-group">
            <label for="monto">Monto</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              id="monto"
              placeholder="Ingresa monto"
            />
          </div>
          <div class="form-group">
            <label for="tiempo">Tiempo</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              id="tiempo"
              placeholder="Ingresa tiempo"
            />
          </div>
          <div class="form-group">
            <label for="interes">Interés</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setRate(e.target.value)}
              id="interes"
              value={rate}
              placeholder="Ingresa interés"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => calcularCuota(amount, rate, time)}
          >
            Calcular
          </button>
        </div>
        <div class="col-6">
          <table id="lista-tabla" class="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cuota</th>
                <th>Capital</th>
                <th>Interés</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr>
                  <td>${payment.date}</td>
                  <td>${payment.share}</td>
                  <td>${payment.capital}</td>
                  <td>${payment.rate}</td>
                  <td>${payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;

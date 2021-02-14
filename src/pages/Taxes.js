import React, { useState } from "react";
import Input from "../shared/Input";

const Taxes = () => {
  const [amount, setAmount] = useState(null);
  const [percent, setPercent] = useState(null);
  const [results, setResults] = useState(null);
  const calculateIVA = () => {
    if (isNaN(amount) || isNaN(percent)) return;
    if (percent <= 0) return;
    const percentValue = parseFloat(percent) / 100;
    const iva = parseFloat(amount) * parseFloat(percentValue);
    const ntotal = parseFloat(amount) + parseFloat(iva);
    setResults({
      ivaValue: iva,
      total: ntotal,
    });
  };
  console.log(results);
  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <div className="row mt-3">
        <div className="col-6">
          <h2>Calcular IVA</h2>
          <Input
            value={amount}
            label="Monto"
            onChange={setAmount}
            placeholder="Ingresa monto"
          />
          <Input
            value={percent}
            label="IVA"
            onChange={setPercent}
            placeholder="Ingresa el Iva"
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => calculateIVA()}
          >
            Calcular
          </button>
        </div>
        <div className="col-6">
          {results && (
            <div className="d-flex">
              <div style={{marginRight:"10px"}}>Resultados:</div>
              <div>
              <div>Monto: {amount || 0}</div>
              <div>Porcentaje Iva: {percent || 0}</div>
              <div>Iva: {results.ivaValue || 0}</div>
              <div>Total Neto: {results.total || 0}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taxes;

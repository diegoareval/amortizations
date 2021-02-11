import React from "react";

const Table = ({ payments }) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
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
            <td>{payment.date}</td>
            <td>${payment.share}</td>
            <td>${payment.capital}</td>
            <td>${payment.rate}</td>
            <td>${payment.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import moment from "moment";
export const getShare = (monto, interes, tiempo) => {
  return (
    (monto * ((Math.pow(1 + interes / 100, tiempo) * interes) / 100)) /
    (Math.pow(1 + interes / 100, tiempo) - 1)
  );
};

export const calculateAmortization = (monto = 0, interes = 0, tiempo = 0) => {
  return new Promise(function (resolve, reject) {
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, "month");

    let pagoInteres = 0,
      pagoCapital = 0,
      cuota = 0;

    cuota = getShare(monto, interes, tiempo);
    let toPay = [];
    for (let i = 1; i <= tiempo; i++) {
      pagoInteres = parseFloat(monto * (interes / 100));
      pagoCapital = cuota - pagoInteres;
      monto = parseFloat(monto - pagoCapital);

      //Formato fechas
      fechas[i] = mes_actual.format("DD-MM-YYYY");
      mes_actual.add(1, "month");
      const payload = {
        date: fechas[i],
        share: cuota.toFixed(2),
        capital: pagoCapital.toFixed(2),
        rate: pagoInteres.toFixed(2),
        amount: monto.toFixed(2),
      };
      toPay.push(payload);
    }
    resolve(toPay);
    reject([]);
  });
}

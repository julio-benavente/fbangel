import React, { useState, useEffect } from "react";
import { PaymentsTable } from "../../../styles/Dashboard/UsersPageStyles";

const Table = (props) => {
  const [paymentsTableWidth, setPaymentsTableWidth] = useState(null);

  const { payments } = props;
  console.log(payments);

  // This provides to the PAYMENT TABLE a table width behavior. All of the columns are going to have the same width
  useEffect(() => {
    const paymentsWidth = () =>
      setPaymentsTableWidth(() => {
        const parentWidth = document.querySelector(".Users").offsetWidth;
        const padding = parentWidth * 0.07 * 2;
        const realWidth = parentWidth - padding;

        const columns = [
          {
            column: "concept",
            width: 35,
            min: 200,
          },
          {
            column: "paypal",
            width: 20,
            min: 100,
          },
          {
            column: "date",
            width: 15,
            min: 100,
          },
          {
            column: "status",
            width: 15,
            min: 100,
          },
          {
            column: "amount",
            width: 15,
            min: 100,
          },
        ];

        const grid = () => {
          var template = "";
          columns.map((column) => {
            const { width, min } = column;
            const value =
              (realWidth * width) / 100 > min ? `${width}%` : `${min}px`;
            template += `${value} `;
            return null;
          });

          return template;
        };

        return {
          gridTemplateColumns: grid(),
        };
      });

    paymentsWidth();
    window.addEventListener("resize", paymentsWidth);

    return () => window.removeEventListener("resize", setPaymentsTableWidth);
  }, []);
  return (
    <PaymentsTable className="PaymentsTable">
      <div className="PaymentsTable">
        <div className="thead">
          <div className="tr" style={{ ...paymentsTableWidth }}>
            <div className="th">Concepto</div>
            <div className="th">Cuenta de paypal</div>
            <div className="th">Fecha de pago</div>
            <div className="th">Estado</div>
            <div className="th">Monto</div>
          </div>
        </div>
        <div className="tbody">
          {payments.length !== 0 &&
            payments.map((payment) => {
              const { amount, concept, id, paymentDate, paypalEmail, status } =
                payment;

              return (
                <div className="tr" style={{ ...paymentsTableWidth }}>
                  <div className="td concept">{concept}</div>
                  <div className="td paypalEmail">{paypalEmail}</div>
                  <div className="td paymentDate">{paymentDate}</div>
                  <div className="td status approved">{status}</div>
                  <div className="td amount ">{`$ ${amount}`}</div>
                </div>
              );
            })}
          {/* <div className="tr" style={{ ...paymentsTableWidth }}>
            <div className="td">Usuario referido : marco.aurelio@gmail.com</div>
            <div className="td">jose.luis@gmail.com</div>
            <div className="td">02/06/2021</div>
            <div className="td approved">Aprobado</div>
            <div className="td">$ 5.00</div>
          </div> */}
        </div>
      </div>
    </PaymentsTable>
  );
};

export default Table;

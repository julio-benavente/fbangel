import React, { useState, useEffect } from "react";
import {
  Payments,
  Title,
  Table,
} from "../../../styles/Dashboard/PaymentsPageStyle";

const PaymentsPage = () => {
  const [orderDetailsTableWidth, setOrderDetailsTableWidth] = useState(null);

  // This his a table width behavior. All of the columns are going to have the same width
  useEffect(() => {
    const width = () =>
      setOrderDetailsTableWidth(() => {
        const parentWidth = document.querySelector(".Payments").offsetWidth;
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

    width();
    window.addEventListener("resize", width);

    return () =>
      window.removeEventListener("resize", setOrderDetailsTableWidth);
  }, []);

  return (
    <Payments className="Payments">
      <Title>Payments</Title>
      <Table>
        <div className="thead">
          <div className="tr" style={{ ...orderDetailsTableWidth }}>
            <div className="th">Concepto</div>
            <div className="th">Cuenta de paypal</div>
            <div className="th">Fecha de pago</div>
            <div className="th">Estado</div>
            <div className="th">Monto</div>
          </div>
        </div>
        <div className="tbody">
          <div className="tr" style={{ ...orderDetailsTableWidth }}>
            <div className="td">Usuario referido : marco.aurelio@gmail.com</div>
            <div className="td">jose.luis@gmail.com</div>
            <div className="td">02/06/2021</div>
            <div className="td approved">Aprobado</div>
            <div className="td">$ 5.00</div>
          </div>
          <div className="tr" style={{ ...orderDetailsTableWidth }}>
            <div className="td">Pago mensual por alquiler : JUN-2021</div>
            <div className="td">jose.luis@gmail.com</div>
            <div className="td">-</div>
            <div className="td pending">Pendiente</div>
            <div className="td">$ 30.00</div>
          </div>
          <div className="tr" style={{ ...orderDetailsTableWidth }}>
            <div className="td">Pago mensual por alquiler : JUN-2021</div>
            <div className="td">jose.luis@gmail.com</div>
            <div className="td">-</div>
            <div className="td pending">Pendiente</div>
            <div className="td">$ 30.00</div>
          </div>
        </div>
      </Table>
    </Payments>
  );
};

export default PaymentsPage;

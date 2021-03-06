import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

// Components
import UserRow from "./UserRow";

// Styles
import {
  Users,
  Title,
  UsersTable,
} from "../../../styles/Dashboard/UsersPageStyles";

const UsersPage = () => {
  const [usersTableWidth, setUsersTableWidth] = useState(null);

  // This provides to the USER TABLE a table width behavior. All of the columns are going to have the same width
  useEffect(() => {
    const usersWidth = () =>
      setUsersTableWidth(() => {
        const parentWidth = document.querySelector(".Users").offsetWidth;
        const padding = 30;
        const realWidth = parentWidth - padding;

        const columns = [
          {
            column: "payments",
            width: 10,
            min: 100,
          },
          {
            column: "name",
            width: 20,
            min: 100,
          },
          {
            column: "status",
            width: 10,
            min: 100,
          },
          {
            column: "email",
            width: 20,
            min: 100,
          },
          {
            column: "country",
            width: 10,
            min: 100,
          },
          {
            column: "phone",
            width: 15,
            min: 100,
          },
          {
            column: "moreInformation",
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

    usersWidth();
    window.addEventListener("resize", usersWidth);

    return () => window.removeEventListener("resize", setUsersTableWidth);
  }, []);

  const users = [
    {
      id: v4(),
      firstName: "Juan",
      lastName: "Aureleo",
      email: "juan.aureleo@gmail.com",
      status: "validated",
      country: "Peru",
      phone: "51934898005",
      //
      fake_firstName: "Juan",
      fake_lastName: "Aureleo",
      fake_email: "juan.aureleo@gmail.com",
      fake_status: "validated",
      fake_country: "Peru",
      fake_phone: "51934898005",
      payments: [
        {
          id: v4(),
          concept: "Usuario referido : marco.aurelio@gmail.com",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "02/06/2021",
          status: "approved",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
      ],
    },
    {
      id: v4(),
      firstName: "Juan",
      lastName: "Aureleo",
      email: "juan.aureleo@gmail.com",
      status: "validated",
      country: "Peru",
      phone: "51934898005",
      //
      fake_firstName: "Juan",
      fake_lastName: "Aureleo",
      fake_email: "juan.aureleo@gmail.com",
      fake_status: "validated",
      fake_country: "Peru",
      fake_phone: "51934898005",
      payments: [
        {
          id: v4(),
          concept: "Usuario referido : marco.aurelio@gmail.com",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "02/06/2021",
          status: "approved",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
      ],
    },
    {
      id: v4(),
      firstName: "Juan",
      lastName: "Aureleo",
      email: "juan.aureleo@gmail.com",
      status: "validated",
      country: "Peru",
      phone: "51934898005",
      //
      fake_firstName: "Juan",
      fake_lastName: "Aureleo",
      fake_email: "juan.aureleo@gmail.com",
      fake_status: "validated",
      fake_country: "Peru",
      fake_phone: "51934898005",
      payments: [
        {
          id: v4(),
          concept: "Usuario referido : marco.aurelio@gmail.com",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "02/06/2021",
          status: "approved",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
      ],
    },
    {
      id: v4(),
      firstName: "Juan",
      lastName: "Aureleo",
      email: "juan.aureleo@gmail.com",
      status: "validated",
      country: "Peru",
      phone: "51934898005",
      //
      fake_firstName: "Juan",
      fake_lastName: "Aureleo",
      fake_email: "juan.aureleo@gmail.com",
      fake_status: "validated",
      fake_country: "Peru",
      fake_phone: "51934898005",
      payments: [
        {
          id: v4(),
          concept: "Usuario referido : marco.aurelio@gmail.com",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "02/06/2021",
          status: "approved",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
        {
          id: v4(),
          concept: "Pago mensual por alquiler : JUN-2021",
          paypalEmail: "jose.luis@gmail.com",
          paymentDate: "-",
          status: "pending",
          amount: "$ 5.00",
        },
      ],
    },
  ];

  return (
    <Users className="Users">
      <Title>Users</Title>
      <UsersTable>
        <div className="thead">
          <div className="tr" style={{ ...usersTableWidth }}>
            <div className="th payments"></div>
            <div className="th name">Nombre</div>
            <div className="th status">Estado</div>
            <div className="th email">Email</div>
            <div className="th country">Pais</div>
            <div className="th phone">Telefono</div>
            <div className="th moreInformation"></div>
          </div>
        </div>
        <div className="tbody">
          {users.length !== 0 &&
            users.map((user, index) => (
              <UserRow
                user={user}
                key={index}
                usersTableWidth={usersTableWidth}
              />
            ))}
        </div>
      </UsersTable>
    </Users>
  );
};

export default UsersPage;

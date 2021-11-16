import React, { useEffect, useState } from "react";
import { dateDecoder } from "../lib/dateDecoder";

export const TableRow = ({ time, data }) => {
  const status = data === "01" ? "Encendido" : "Apagado";
  const date = new Date(time * 1000).toLocaleString();

  return (
    <tr>
      <td className={status}>{status}</td>
      <td>{date}</td>
      {/* <td>A calcular</td> */}
    </tr>
  );
};

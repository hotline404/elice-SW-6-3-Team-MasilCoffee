import React from "react";
import * as TableLayout from "./Style_Table";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

const Table = ({ trData, tdData, onTdClick = null, isButtons = false }) => {
  return (
    <TableLayout.Table>
      <thead>
        <tr>
          {trData.map((data, i) => {
            return <th key={data + i}>{data}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {tdData.map((rowData, rowI) => (
          <tr key={rowI}>
            {rowData.map((data, colI) => (
              <td key={data + colI}>{data}</td>
            ))}
            {isButtons && (
              <>
                <TableLayout.Button className="edit" onClick={() => onTdClick(rowData)}>
                  <FiEdit />
                </TableLayout.Button>
                <TableLayout.Button className="deletion" onClick={() => onTdClick("삭제")}>
                  <FiTrash />
                </TableLayout.Button>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </TableLayout.Table>
  );
};

export default Table;

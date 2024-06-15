import React from 'react';
import { useTable } from 'react-table';
import "../css/productTable.css"


const CustomTable = ({ data, columns }) => {
  // Initialize the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  border: '1px solid black',
                  padding: '1mm',
                  textAlign: 'center',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} id='lastCell'>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      // border: '1px solid green',
                      borderBottom: 'none',
                      padding: '1mm 0.9mm 1mm 0.9mm',
                      textAlign: 'center',
                      // verticalAlign : 'top'
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ProductTable = ({sec4}) => {
  // const data = [
  //   // AdProd your data here
  //   {sno : "1", pd : "BTC1203-3243-sFKSFKSkSSLFF- HFJsdfdskl fjlk  (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "2", pd : "3243-sFKSFKSkSSLFF (BISCUIT)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "3", pd : "BTC1203-3243-sFKSFKSkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "4", pd : "BTC1203-3243-sFKSFKklj-345-543-44SkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "5", pd : "BTC1203-3243-sFKSFKSkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "6", pd : "BTC1203-3243-sFKSFKSkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "7", pd : "BTC1203-3243-sFKSFKSkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "8", pd : "BTC1203-3243-sFKSFKSkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {sno : "9", pd : "BTC1203-3243-sFKSFKSkSSLFF (EARRING)", hsn : "234", pcs : 1, gr : 12, net : 45, rate : 23445, amt : '23434', lbr : 2345, tval : 23546},
  //   // {tval : "-"},
  //   // {tval : "-"},
  //   // {tval : "-"},
  //   // {tval : "-"},
  //   // {tval : "-"},
  //   // {tval : "-"},
  // ];

  const columns = [
    {
      Header: 'SNo',
      accessor: 'sno',
    },
    {
      Header: 'Product Description',
      accessor: 'pd',
    },
    {
      Header: 'HSN Code',
      accessor: 'hsn',
    },
    {
      Header: 'Pcs', 
      accessor: 'pcs',
    },
    {
      Header: 'Gr Wt',
      accessor: 'gr',
    },
    {
      Header: 'Net Wt',
      accessor: 'net',
    },
    {
      Header: 'Rate',
      accessor: 'rate',
    },
    {
      Header: 'Amount',
      accessor: 'amt',
    },
    {
      Header: 'Lbr Amt',
      accessor: 'lbr',
    },
    {
      Header: 'Total Amount',
      accessor: 'tval',
    },
  ];

  return (
    <div className='tableContainer'>
      {/* <div className='table'> */}
        <CustomTable data={sec4} columns={columns}/>
        {/* </div> */}
  </div>
  )
};

export default ProductTable;

  
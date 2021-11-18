import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { fetchMessages } from '../api/fetchMessages';
import { TableRow } from './TableRow';

const MainTable = ({data}) => {

  // const [data, setData] = useState([]);
  // const loadData = async () =>{
  //   let query = option;
  //   if(page){
  //     query += `?page=${page}`;
  //   }
  //   const data = await fetchMessages(query);
  //   setData(data.messages);
  //   if(page){
  //     setPages(data.totalPages)
  //   }
  // }
  // useEffect(() => {
  //   loadData();
  // }, [])


    return (
        <Table bordered hover responsive size="sm" className="container-sm">
            <thead className="bg-info">
            <tr>
                <th className="th-text">Estado</th>
                <th className="th-text">Fecha</th>
                {/* <th>Flujo</th> */}

            </tr>
            </thead>
            <tbody>
            {
                data.map((info) => {
                    return <TableRow
                        key = {info.time}
                        {...info} 
                    />
                })
            }
            
            </tbody>
        </Table>             
    );
};

export default MainTable;

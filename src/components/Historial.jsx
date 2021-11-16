import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";

import MainTable from './MainTable'

import { fetchMessages } from '../api/fetchMessages';

const Historial = () => {
  const [elements, setElements] = useState('');
  const [actualPage, setActualPage] = useState(1);
  const [data, setData] = useState([]);
  const loadData = async () =>{
    let query = `allMensajes?page=${actualPage}`;
    const data = await fetchMessages(query);
    setData(data.messages);
    setElements(data.totalElements);
  }
  useEffect(() => {
    loadData();
  }, [actualPage])
  return (
    <div>
      <MainTable data={data}/>
      <Pagination
        activePage={actualPage}
        totalItemsCount={elements}
        itemsCountPerPage={50}
        pageRangeDisplayed={10}
        onChange={async(e)=>{
          await setActualPage(e);
        }}
      />
    </div>
  )
}

export default Historial

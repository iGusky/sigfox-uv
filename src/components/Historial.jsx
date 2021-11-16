import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";
import MainTable from './MainTable';
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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                    <MainTable data={data}/>
                </div>
                <div className='col-md-4'/>
                <div className='col-md-4'>
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
                <div className='col-md-4'/>
            </div>
        </div>
    )
}

export default Historial

import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";
import MainTable from './MainTable';
import { fetchMessages } from '../api/fetchMessages';
import {Card} from "react-bootstrap";
import {Footer} from "./Footer";

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
        <div className="container-sm">
            <Card className="container-fluid">
                <Card.Title>
                    <h1 className="text-primary">Historial</h1>
                </Card.Title>
                <Card.Body className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-12'>
                        <MainTable data={data}/>
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center col-md-12 col-md-8 col-sm-12'>
                    <Pagination
                        activePage={actualPage}
                        totalItemsCount={elements}
                        itemsCountPerPage={50}
                        pageRangeDisplayed={8}
                        onChange={async(e)=>{
                            await setActualPage(e);
                        }}
                    />
                </Card.Footer>
            </Card>
            <Footer />
        </div>
    )
}

export default Historial

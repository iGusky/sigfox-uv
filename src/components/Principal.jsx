import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainTable from './MainTable'
import { fetchMessages } from '../api/fetchMessages';
import { Card } from "react-bootstrap";

const Principal = () => {
  const [data, setData] = useState([]);
  const loadData = async () =>{
    let query = `mensajes`;
    const data = await fetchMessages(query);
    setData(data.messages);
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
      <section className="container mt-5">
        <Card>
          <Card.Body>
            <Card.Title><h1 className="text-primary">Bienvenido</h1></Card.Title>
            <Card.Text>La información presentada es del día de hoy</Card.Text>
            <MainTable data={data} />
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-center" >
          <Link to="/historial" className="mt-2 mb-5  d-flex justify-content-center btn btn-info" >Acceder al historial </Link>
        </div>
      </section>
    </div>
  )
}

export default Principal

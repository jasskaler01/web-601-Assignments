import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import {Row,Col,Card, Divider} from 'antd';
import axios from "axios"
import MyCard from './components/MyCard';
function App() {
  const [blogs , setBlogs] = useState(null);
  const[ status, setStatus] = useEffect(false);
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
setBlogs(response.data)
setStatus(true)
    }).catch(()=>{
      console.log("Api FAiles")
      setStatus(false)
    })
   },[])
 
  return (
  <div>
    <Row gutter={16}>
      <Col className='gutter-row'>
        Header
      </Col>
    </Row>
    <Divider orientation='center'>
      Items
    </Divider>
    <Row gutter={16}>
    {status && blogs.map((
        blogObj)=>{
          return <MyCard />
        }
      )}
    </Row>
  </div>
  );}


export default App;

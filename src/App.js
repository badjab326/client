import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        setBookName: '',
        setReview: '',
        fetchData: [],
        reviewUpdate: ''
      }
  }
  componentDidMount() {
    axios.get("/api/get")
        .then((response) => {
            this.setState({
                fetchData: response.data
            })
        })
  }
  
  submit = () => {
    axios.post('/api/insert', this.state)
        .then(() => { alert('success post') })
    console.log(this.state)
    document.location.reload();
  }
  
  delete = (id) => {
    if (confirm("Do you want to delete? ")) {
        axios.delete(`/api/delete/${id}`)
        document.location.reload()
    }
  }
  
  edit = (id) => {
    axios.put(`/api/update/${id}`, this.state)
    document.location.reload();
  }
  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value
    this.setState({
      [nam]: val
    })
  }
  
  handleChange2 = (event) => {
    this.setState({
      reviewUpdate: event.target.value
    })
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios'
import { FormGroup, Label, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class App extends Component {

    state = {
        books: [],
        newBookData: {
            title: '',
            rating: ''
        },
        editBookData: {
            id: "",
            title: '',
            rating: ''
        },
        newbookmodal: false,
        editbookmodal: false

    }
    // componentWillMount() {
    //   axios.get('https://9ea133b4-8200-4603-bd2f-1fd483789d9e.mock.pstmn.io?id=9').then((Response) => {
    //     this.state.books= Response.data

    //   })
    // }
    toggle() {
        this.setState({
            newbookmodal: !this.state.newbookmodal
        })
        // this.state.newbookmodal = true
    }
    toggleEditBook(){
        this.setState({
            editbookmodal: !this.state.editbookmodal
        })
    }
    addBook() {
        axios.post('', this.state.newBookData).then((Response) => {
            let { books } = this.state
            books.push(Response.data)
            this.setState({
                books, newbookmodal: false, newBookData: {
                    title: "",
                    rating: ""
                }
            })

        })
    }
    uppdateBook(){  


    }
    editBook(id, title, rating) {
        // this.setState({
        //     editBookData:{ id,title,rating},editbookmodal: !this.state.editbookmodal

        // })
        
    }
    render() {
        // let books = this.state.books.map((book) => {
        //   return (
        //     <tr key={book.id}>
        //       <td>{book.id}</td>
        //       <td>{book.title}</td>
        //       <td>{book.rating}</td>
        //       <td>
        //         <Button color="success" size="sm" className='mr-2'>edit</Button>
        //         <Button color="danger" size="sm">delete</Button>
        //       </td>
        //     </tr>
        //   )

        // })
        return (
            <div className="App container">
                <h1>Books app</h1>

                <Button className="my-2" color="primary" onClick={this.toggle.bind(this)}>add book</Button>
                <Modal isOpen={this.state.newbookmodal} toggle={this.toggle.bind(this)} >
                    <ModalHeader toggle={this.toggle.bind(this)}>Modal title</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="Title">title</Label>
                            <Input id="title" value={this.state.newBookData.title} onChange={(e) => {
                                let { newBookData } = this.state
                                newBookData.title = e.target.value
                                this.setState({ newBookData })
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="rating">Rating</Label>
                            <Input id="rating" value={this.state.newBookData.rating} onChange={(e) => {
                                let { newBookData } = this.state
                                newBookData.rating = e.target.value
                                this.setState({ newBookData })
                            }} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addBook.bind(this)}>Add book</Button>{' '}
                        <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>1</td>
                            <td>hh</td>
                            <td>4.5</td>
                            <td>
                                <Button color="success" size="sm" className='mr-2' onClick={this.editBook(1,"haha",2.5),this.toggleEditBook.bind(this)}>edit</Button>
                                <Modal isOpen={this.state.editbookmodal} toggle={this.toggleEditBook.bind(this)} >
                                    <ModalHeader toggle={this.toggleEditBook.bind(this)}>Modal title</ModalHeader>
                                    <ModalBody>

                                        <FormGroup>
                                            <Label for="Title">title</Label>
                                            <Input id="title" value={this.state.editBookData.title} onChange={(e) => {
                                                let { editBookData } = this.state
                                                editBookData.title = e.target.value
                                                this.setState({ editBookData })
                                            }} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="rating">Rating</Label>
                                            <Input id="rating" value={this.state.editBookData.rating} onChange={(e) => {
                                                let { editBookData } = this.state
                                                editBookData.rating = e.target.value
                                                this.setState({ editBookData })
                                            }} />
                                        </FormGroup>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.uppdateBook.bind(this)}>update book</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleEditBook.bind(this)}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                                <Button color="danger" size="sm">delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default App;

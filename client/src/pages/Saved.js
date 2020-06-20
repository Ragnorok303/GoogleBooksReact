import React, { Component } from "react";
import NavBar from "../components/NavBar";
import API from "../utils/api/api";
import Cards from "../components/Cards";

class Saved extends Component {
    state = {
        books: [],
        results: [],
        title: ""
    }

    componentDidMount() {
        API.getBooks()
            .then(res => {
                console.log('Data saved:', res.data)
                this.setState({ books: res.data });
            })
            .catch(err => {
                throw err
            })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <NavBar />
                <div className='container'>
                    <h3>Your Saved Books</h3>
                    <div className='container-fluid' id='main-content'>
                        {this.state.books.map(books => (
                            <Cards key={books._id}>
                                title={books.title}
                                id={books._id}
                                link={books.link}
                                author={books.author}
                                image={books.image}
                                description={books.description}
                                deleteBook={this.deleteBook}
                            </Cards>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;
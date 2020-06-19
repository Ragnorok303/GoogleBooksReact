import React, { Component } from "react";
import NavBar from "../components/NavBar";
import API from "../utils/api/api";
import Cards from "../components/Cards";


class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        API.getBook(this.props.match.params.id)
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      }

    handleDeleteBook = event => {
        event.preventDefault();

        const bookID = event.target.getAttribute('data-id')

        const newState = { ...this.state }

        newState.books = this.state.books.filter(book => book._id !== bookID)

        API.deleteBook(bookID).then(
            (response) => {
                this.setState(newState)
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className='container'>
                    <h3 style={{ color: 'white' }} >Your Saved Books</h3>
                    <div className='container-fluid' id='main-content'>
                        {this.state.books.map((book) => {
                            return (
                                <Cards
                                    key={book._id}
                                    title={book.title}
                                    id={book._id}
                                    link={book.link}
                                    author={book.author}
                                    image={book.image}
                                    description={book.description}
                                    deleteBook={this.handleDeleteBook}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;
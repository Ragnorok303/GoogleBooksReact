import React from "react";
import Button from "../Button";


function Cards({ title, link, id, author, image, description, saveBook, deleteBook }) {
    // return <p>{title} x {author}</p>;
    if (!saveBook) {
        return (
            <div className="container" style={{ backgroundColor: 'lightgrey', borderRadius: 20, opacity: '3' }}>

                <div id='result-card' style={{ opacity: 0.7 }} >

                    <div className='row text-center' id='result-header'>
                        <br />    <div className='col-3'>
                            <h4>{title}</h4>
                            <small>
                                <br />{JSON.parse(author).join(', ')}</small>
                        </div>
                        <span className='col-3 offset-6'>
                            <Button
                                href={link}
                            >View Book
                            </Button>
                            <Button
                                id={id}
                                onClick={deleteBook}
                            >Delete
                            </Button>
                        </span>
                    </div>
                    <div className='row'>
                        <hr />
                    </div>
                    <div className='row'>
                        <div className='col-3 text-center'>
                            <img src={image} alt={title} />
                            <br />
                            <br />
                        </div>
                        <div className='col-9'>
                            <p className='lead'>Summary: </p>
                            {description}
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container" style={{ backgroundColor: 'lightgrey', borderRadius: 40, opacity: '3' }}>
                <br />
                <br />
                <div id='result-card' style={{ opacity: 0.7 }}>

                    <div className='row text-center' id='result-header'>
                        <br />    <div className='col-3'>
                            <h4>{title}</h4>
                            <small>
                                <br />Author:
                        <br />{author}</small>
                        </div>
                        <span className='col-3 offset-6'>
                            <Button
                                href={link}
                            >View Book
                            </Button>
                            <Button
                                id={id}
                                onClick={saveBook}
                            >Save Book
                            </Button>
                        </span>
                    </div>
                    <div className='row'>
                        <hr />
                    </div>
                    <div className='row'>
                        <div className='col-3 text-center'>
                            <img src={image} alt={title} />
                            <br />
                            <br />
                        </div>
                        <div className='col-9'>
                            <p className='lead'>Summary: </p>
                            {description}
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
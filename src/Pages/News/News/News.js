import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { image_url, title, details, author, rating, category_id } = news
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-between'>
                            <p><span><strong>Author:</strong></span> <span>{author.name}</span></p>
                            <p><span><strong>Published Date:</strong></span> <span>{author.published_date}</span></p>
                            <div>
                                <FaStar className='text-warning me-2' />
                                <span>{rating.number}</span>
                            </div>
                        </div>
                    </Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-end'>
                        <Link to={`/category/${category_id}`}><Button variant='outline-primary'>Back to category</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default News;
import React, { useState } from 'react';
import { useMovieReviews } from '../../../hooks/useMovieReviews';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const MovieReviews = () => {
    let params = useParams();
    const { data } = useMovieReviews(params);
    const [visibleReviews, setVisibleReviews] = useState(3);

    const handleShowMoreReviews = () => {
        setVisibleReviews(visibleReviews + 3);
    };

    return (
        <Container>
            <h4 style={{ color: 'white' }}>Reviews</h4>
            {data && data.results && data.results.length > 0 ? (
                data.results.slice(0, visibleReviews).map((review, index) => (
                    <Card key={index} className="my-3" style={{ backgroundColor: 'black', borderColor: 'white'}}>
                        <Card.Body>
                            <Card.Title style={{ color: 'white' }}>{review?.author}</Card.Title>
                            <Card.Text style={{ color: 'white' }}>{review?.content}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <div className='NotFound' style={{ color: 'white', paddingTop:'50px' }}>There is no review.</div>
            )}
            {visibleReviews < (data?.results?.length || 0) && (
                <div className="text-center mt-4">
                    <Button variant="danger" onClick={handleShowMoreReviews}>More +</Button>
                </div>
            )}
        </Container>
    );
}

export default MovieReviews;
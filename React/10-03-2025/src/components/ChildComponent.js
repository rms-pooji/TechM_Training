import React from 'react';

const ChildComponent = ({ reviews }) => {
  return (
    <div className="mt-4">
      <h3 className="text-center">User Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-center">No reviews yet.</p>
      ) : (
        <ul className="list-group">
          {reviews.map((review) => (
            <li key={review.id} className="list-group-item">
              <strong>{review.title}</strong> by {review.author}  
              <span className="badge bg-success ms-2">⭐ {review.rating}</span>
              <p className="mb-1">{review.review}</p>
              <small><em>Genre: {review.genre}</em></small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChildComponent;

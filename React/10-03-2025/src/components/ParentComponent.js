import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    review: '',
  });

  // Fetch reviews from API using Axios
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setReviews(response.data.slice(0, 5)); // Get 5 sample reviews
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
    fetchReviews();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...formData, id: reviews.length + 1 }]);
    setFormData({ title: '', author: '', genre: '', rating: '', review: '' });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Book/Manga Review Form</h2>
      <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="form-control mb-2" required />
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="form-control mb-2" required />
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" className="form-control mb-2" required />
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (1-5)" className="form-control mb-2" min="1" max="5" required />
        <textarea name="review" value={formData.review} onChange={handleChange} placeholder="Write your review" className="form-control mb-2" required></textarea>
        <button type="submit" className="btn btn-primary w-100">Submit Review</button>
      </form>

      <ChildComponent reviews={reviews} />
    </div>
  );
};

export default ParentComponent;

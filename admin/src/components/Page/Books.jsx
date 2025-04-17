import React, { useState, useEffect } from 'react';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Manage Books</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.available ? 'Available' : 'Checked Out'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
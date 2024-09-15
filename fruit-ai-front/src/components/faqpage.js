import React, { useEffect, useState } from 'react';
import { getFaqs, createFaq, updateFaq, deleteFaq } from '../api';
import '../styles.css';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editFaq, setEditFaq] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await getFaqs();
      setFaqs(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async () => {
    try {
      await createFaq(newFaq);
      fetchFaqs();
      setNewFaq({ question: '', answer: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateFaq(id, editFaq);
      fetchFaqs();
      setEditFaq(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFaq(id);
      fetchFaqs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="faq-container">
      <h1>FAQ Section</h1>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq._id} className="faq-item">
            <div className="faq-content">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
            <div className="faq-buttons">
              <button onClick={() => handleDelete(faq._id)}>Delete</button>
              <button onClick={() => setEditFaq(faq)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      <div className="faq-form">
        <h2>{editFaq ? 'Edit FAQ' : 'Add FAQ'}</h2>
        <input
          type="text"
          placeholder="Question"
          value={editFaq ? editFaq.question : newFaq.question}
          onChange={(e) => (editFaq ? setEditFaq({ ...editFaq, question: e.target.value }) : setNewFaq({ ...newFaq, question: e.target.value }))}
        />
        <textarea
          placeholder="Answer"
          value={editFaq ? editFaq.answer : newFaq.answer}
          onChange={(e) => (editFaq ? setEditFaq({ ...editFaq, answer: e.target.value }) : setNewFaq({ ...newFaq, answer: e.target.value }))}
        />
        <button onClick={() => (editFaq ? handleUpdate(editFaq._id) : handleCreate())}>
          {editFaq ? 'Update' : 'Create'}
        </button>
      </div>
    </div>
  );
};

export default FaqPage;

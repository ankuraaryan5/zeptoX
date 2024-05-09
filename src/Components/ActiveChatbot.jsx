import React, { useState } from 'react';

function ActiveChatbot() {
  // State to store the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Array containing questions and answers
  const questionsAndAnswers = [
    { question: 'What is zeptoX?', answer: 'We are a platform that connects students and teachers based on their pincode' },
    { question: 'What is the idea behind zeptoX?', answer: 'We are here to revolutionize the way of education in offline mode, we are here to make quality education accessible to everyone' },
    { question: 'How can I contanct zeptoX', answer: 'To get in touch with us, click on the "Contact Us" button in the top right corner' },
    { question: 'How can I get started?', answer: 'To get yourself started with zeptoX, click on the "Signup" button in the top right corner, once signed up, you will be redirected to the registration page, once you fill that, You are set to go' },
    { question: 'What should be the qualification to register as a teacher?', answer: 'to register as a teacher you need to have at least completed your 12th' },
    { question: 'How can I find teachers? ', answer: 'Once you are signed up, you will be able to find teachers based on your pincode' },
    { question: 'How can I find students?', answer: 'Once you are signed up, you will be able to find students based on your pincode' },
    { question: 'Where can I buy books?', answer: 'you can buy books in the bookstore in our home section itself' },
    { question: 'How much earliest can I get my books?', answer: 'we will take maximum of 1 week to deliver the books to you' },
    { question: 'Will there be any discounts?', answer: 'You will have to pay only for the books' },
    { question: 'Is there any job openings in zeptoX?', answer: 'Currently we don' + "'" + 't have any openings but stay connected as we will be planning some bigger things in future' }
  ];

  return (
    <div className='container ' style={{maxWidth:'400px', maxHeight:'400px', overflowY:'auto', background: 'rgb(4,212,250)',
    background: 'linear-gradient(90deg, rgba(4,212,250,0.854954481792717) 0%, rgba(60,174,213,1) 0%, rgba(243,225,194,1) 100%)'}}>
      <div className="card-body d-flex flex-column">
      <h1>Get Started with zeptoX</h1>
        {questionsAndAnswers.map((item, index) => (
          <div key={index}> 
          
            <button className='btn btn-outline-success text-center text-white' onClick={() => setSelectedAnswer(item.answer)}>
              {item.question}
            </button>
            {selectedAnswer === item.answer && <p className='text-center text-dark fw-bold'>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveChatbot;

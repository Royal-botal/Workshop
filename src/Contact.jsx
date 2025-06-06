import React, { useState } from 'react';

function Contact() {
    const [comment, setComment] = useState('');
    const [textInput, setTextInput] = useState(''); // State for the input field

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleTextInputChange = (e) => {
        setTextInput(e.target.value); // Update state for the input field
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Comment submitted: ${comment}\nText input: ${textInput}`);
        setComment(''); // Clear the comment after submission
        setTextInput(''); // Clear the text input after submission
    };

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form>
          
<div class="form">
  <input class="input" placeholder="Type your text" required="" type="text"></input>
  <span class="input-border"></span>
</div>
                
                <br />
                
                <br />
                  <button class="button">
                       Button
                  </button>
            </form>
        </div>
    );
}

export default Contact;

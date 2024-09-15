// src/components/TranslatorPage.js
import React, { useState } from 'react';

const translateText = (text) => {
  // Mock translation: just appends "(translated)" to the text
  return text + " (translated)";
};

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    setTranslatedText(translateText(inputText));
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <textarea
        placeholder="Enter text here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <div className="translated-text">
        <h2>Translated Text:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslatorPage;

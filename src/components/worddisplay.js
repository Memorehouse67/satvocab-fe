import React, { useState } from 'react';

function WordDisplay() {
  // State to track if the sentences should be displayed
  const [showSentences, setShowSentences] = useState(false);
  
  // State to track if the mnemonic explanation and image should be displayed
  const [showMnemonic, setShowMnemonic] = useState(false);

  // Sentences using the word in context
  const sentences = [
    "The storm finally abated after a week of heavy rainfalls.",
    "His anger abated as he realized the mistake was not intentional.",
    "The pain in his leg abated after he took some painkillers."
  ];

  // Function to handle the first Continue button click
  const handleFirstContinue = () => {
    setShowSentences(true);
  };

  // Function to handle the second Continue button click
  const handleSecondContinue = () => {
    setShowMnemonic(true);
  };

  return (
    <div className="container">
      <h2>Word of the Day</h2>
      <h1>Abate</h1>
      <p>Definition: (v.) to reduce in intensity or amount.</p>

      {/* First Continue button */}
      {!showSentences && (
        <button onClick={handleFirstContinue}>Continue</button>
      )}

      {/* Display sentences if the first Continue button was clicked */}
      {showSentences && (
        <div>
          <h3>Sentences using "Abate":</h3>
          <ul>
            {sentences.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>

          {/* Second Continue button */}
          {!showMnemonic && (
            <button onClick={handleSecondContinue}>Continue</button>
          )}
        </div>
      )}

      {/* Display mnemonic explanation and image if the second Continue button was clicked */}
      {showMnemonic && (
        <div>
          <h3>Now let's help lock that word into your memory.</h3>
          <p>
            "Abate" sounds a lot like "a bait" as in a bait used in fishing. So to remember the sound, let's connect the sound of the SAT word with its meaning.
          </p>
          {/* Here you would dynamically load the image from MongoDB */}
          <img src="mongodb-image-url" alt="Mnemonic" style={{ display: 'block', margin: '0 auto' }} />
          <p>
            Imagine that A BAIT ABATES (lessens) in size as a fish approaches!
          </p>
        </div>
      )}
    </div>
  );
}

export default WordDisplay;

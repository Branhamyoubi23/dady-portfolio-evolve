
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isDeleting) {
      // Deleting mode
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timeout = setTimeout(() => {}, 500); // Pause before typing next word
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Delete faster
      }
    } else {
      // Typing mode
      const fullText = texts[currentTextIndex];
      if (currentText === fullText) {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else {
        // Still typing
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, delay, isDeleting, texts]);
  
  return (
    <div className="inline-block">
      <span>{currentText}</span>
      <span className="border-r-2 border-primary ml-1 animate-blink">&nbsp;</span>
    </div>
  );
};

export default Typewriter;

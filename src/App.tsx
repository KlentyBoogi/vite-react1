import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Periodically check for the button and click it
    const interval = setInterval(() => {
      const button = document.querySelector('button[title="Start a call"]') as HTMLButtonElement;
      if (button) {
        button.click(); // Automatically click the button
        console.log('Button clicked');
        clearInterval(interval); // Stop further checks
      }
    }, 3000); // Check every 30 seconds

    // Cleanup script and interval on unmount
    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <elevenlabs-convai agent-id="7hTgY55DzvBMcGR4RBdX"></elevenlabs-convai>
    </div>
  );
};

export default App;

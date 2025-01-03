import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <elevenlabs-convai agent-id="7hTgY55DzvBMcGR4RBdX"></elevenlabs-convai>
    </div>
  );
};

export default App;

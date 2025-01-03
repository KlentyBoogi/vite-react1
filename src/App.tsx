import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Auto-starting ElevenLabs widget */}
      <elevenlabs-convai
        agent-id="7hTgY55DzvBMcGR4RBdX"
        auto-start="true"
        theme="dark"
        language="en-US"
      ></elevenlabs-convai>
    </div>
  );
};

export default App;

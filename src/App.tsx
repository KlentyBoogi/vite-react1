import React, { useEffect, useState } from 'react';
import { useConversation } from '@11labs/react';

const App: React.FC = () => {
  const conversation = useConversation();
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    const fetchSignedUrl = async () => {
      const requestHeaders = new Headers();
      requestHeaders.set('xi-api-key', 'sk_36bb37f5048e45098241d7ea14aaf82ead5fd4f051ff4398');

      try {
        const response = await fetch(
          'https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=7hTgY55DzvBMcGR4RBdX',
          {
            method: 'GET',
            headers: requestHeaders,
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching signed URL: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Signed URL:', data.signed_url);

        // Start the conversation using the signed URL
        await conversation.startSession({
          signedUrl: data.signed_url,
        });
        setStatus('Initialized');
        console.log('Conversation started successfully');
      } catch (error) {
        console.error('Error fetching signed URL or starting conversation:', error);
        setStatus('Error initializing agent');
      }
    };

    fetchSignedUrl();

    return () => {
      conversation.endSession().then(() => console.log('Conversation ended'));
    };
  }, [conversation]);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000' }}>
      <div style={{ color: '#fff', textAlign: 'center' }}>
        <h2>ElevenLabs Conversational AI</h2>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default App;

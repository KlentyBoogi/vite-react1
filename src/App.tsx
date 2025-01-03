import React, { useEffect, useState } from 'react';
import { useConversation } from '@11labs/react';

const App: React.FC = () => {
  const conversation = useConversation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeConversation = async () => {
      try {
        // Request microphone access
        await navigator.mediaDevices.getUserMedia({ audio: true });

        // Start the conversation with the given agentId
        await conversation.startSession({
          agentId: '7hTgY55DzvBMcGR4RBdX', // Replace with your actual agent ID
        });

        console.log('Conversation started successfully');
        setIsReady(true);
      } catch (error) {
        console.error('Error starting conversation:', error);
      }
    };

    initializeConversation();

    // Cleanup on unmount
    return () => {
      conversation.endSession().then(() => {
        console.log('Conversation ended');
      });
    };
  }, [conversation]);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000' }}>
      {isReady ? (
        <div style={{ width: '100%', maxWidth: '600px', textAlign: 'center', color: '#fff' }}>
          <h2>ElevenLabs Conversational AI</h2>
          <p>Say something to interact with the agent!</p>
        </div>
      ) : (
        <div style={{ color: '#fff' }}>
          <p>Loading ElevenLabs Conversational AI...</p>
        </div>
      )}
    </div>
  );
};

export default App;

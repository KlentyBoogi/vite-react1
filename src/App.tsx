import React, { useEffect } from 'react';
import { useConversation } from '@11labs/react';

const App: React.FC = () => {
  const conversation = useConversation();

  useEffect(() => {
    const startConversation = async () => {
      try {
        // Prompt the user for microphone access
        await navigator.mediaDevices.getUserMedia({ audio: true });

        // Start the conversation using the public agentId
        await conversation.startSession({
          agentId: '7hTgY55DzvBMcGR4RBdX', // Replace with your actual agent ID
        });

        console.log('Conversation started successfully');
      } catch (error) {
        console.error('Failed to start conversation:', error);
      }
    };

    startConversation();

    // Clean up session on unmount
    return () => {
      conversation.endSession().then(() => {
        console.log('Conversation ended');
      });
    };
  }, [conversation]);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000' }}>
      <h2 style={{ color: '#fff' }}>ElevenLabs Conversational AI is active...</h2>
    </div>
  );
};

export default App;

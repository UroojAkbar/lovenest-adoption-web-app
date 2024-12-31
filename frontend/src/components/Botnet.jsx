import React from 'react';

const Botnet = () => {
  return (
    <div className="mx-auto max-w-lg px-4"> 
      <style>
        {
          `
          df-messenger {
            --df-messenger-bot-message: #c7a15b;
            --df-messenger-button-titlebar-color: #a7c396;
            --df-messenger-chat-background-color: white;
            --df-messenger-font-color: #ffffff;
            --df-messenger-send-icon: #c7a15b;
            --df-messenger-user-message: #c7a15b;
            --df-messenger-chat-window-offset: 16px;
            --df-messenger-titlebar-title-line-height:normal;
            --df-messenger-send-icon-color-hover:#c7a15b ;
            --df-messenger-input-box-color:#a7c396;
            max-width: 100%; /* Ensures the chat window doesn't overflow */
          }
          `
        }
      </style>
      <df-messenger
       chat-title="CHATBOT"
       agent-id="57700a2b-df3d-4203-8646-47296189f9bb"
  language-code="en"

       chat-icon="/2.png"  // Use the image path directly
      ></df-messenger>
    </div>
  );
};

export default Botnet;
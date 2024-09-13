'use client'
import { useState, useEffect } from 'react';
import Chat from '../page';

interface ChatPageProps {
  id: string;
}

const ChatPage = ({ id }: ChatPageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full p-4 bg-green-200">
      <h2 className="text-xl mb-4">Chat: {id}</h2>
      <Chat />
    </div>
  );
};

export default ChatPage;

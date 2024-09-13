'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Search from './Search';

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: () => void }) {
  const [chats, setChats] = useState<Array<{ id: string; title: string }>>([]); //Array of objects
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter(); //To push the user to different pages

  //useEffect(setup/logic, dependencies?/list of reactive valus referenced inside logic)
  useEffect(() => {
    // Fetch chat history from local storage or API
    const storedChats = JSON.parse(localStorage.getItem('chats') || '[]');
    setChats(storedChats);
  }, []);

  const createNewChat = () => {
    const newChatId = Date.now().toString();
    const updatedChats = [...chats, { id: newChatId, title: `Chat ${newChatId}` }];
    setChats(updatedChats);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    router.push(`/home/chat/${newChatId}`);
  };

  const clearAllChats = () => {
    // Clear all chats from state and local storage
    setChats([]);
    localStorage.removeItem('chats');
    router.push(`/home`)
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 rounded-2xl shadow-2xl transform transition-transform duration-200 ${
        open ? 'translate-x-7' : '-translate-x-full'
      } overflow-hidden`}
    >
      <div className="p-2 h-full flex flex-col">
        <div className="flex flex-row items-center mb-1 items-center justify-center">
          <div className="">
            {open && <Button open={open} setOpen={() => setOpen()} />}
          </div>
          <button onClick={createNewChat} className="px-9 py-2 mx-1 bg-cornflowerblue text-white rounded-lg text-sm italic">
            + New Story
          </button>
          <button className="flex items-center justify-center bg-black text-white size-9 rounded-lg" onClick={() => setSearchOpen(!searchOpen)}>
            <i className="bx bx-search"></i>
          </button>
        </div>
        {searchOpen &&
          <input
            className={`transition-all duration-300 ease-in-out mt-1 ${
              searchOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            type="text"
            placeholder="Search for your stories..."
          />
        }
        <div className="flex flex-row mt-2 justify-between text-xs px-1 +mb-2">
          <p className="italic">Your Stories</p>
          {/* Button to clear all chats */}
          <button onClick={clearAllChats} className="hover:text-cornflowerblue">
            <b>Clear All</b>
          </button>
        </div>
        {/* Make this section scrollable */}
        <nav className="flex-grow overflow-y-auto px-2">
          {chats.map((chat) => (
            <Link key={chat.id} href={`/home/chat/${chat.id}`} className="flex items-center py-2">
              <i className="bx bx-message-dots mr-1"></i>
              {chat.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col mt-2 mb-1 text-sm">
          <button className="flex mb-1 border-2 rounded-lg py-1 items-center">
            <i className='bx bx-cog text-2xl p-1 ml-1 rounded-lg bg-zinc-200' ></i>
            <p className="ml-1">Settings</p>
          </button>
          <button className="flex border-2 py-1 rounded-lg py-2 items-center">
            <i className='bx bx-user text-2xl p-1 ml-1 rounded-lg bg-zinc-200'></i>
            <p className="ml-1">User</p>
          </button>
        </div>
      </div>
    </div>
  );
}

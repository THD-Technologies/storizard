'use client';
import { useState } from "react";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import CreateNewChat from "../components/CreateNewChat";
import Image from "next/image";

export default function Home({
  children,
  chat,
}: {
  children: React.ReactNode;
  chat: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex h-screen overflow-hidden transition-all duration-200 ${open ? 'ml-72' : 'ml-0'}`}>
      <Sidebar open={open} setOpen={() => setOpen(!open)} />
      <div className="flex flex-col flex-grow transition-all duration-700 ease-in-out">
        <header className="flex w-full flex-row p-2 items-center space-x-1">
          {!open && <Button open={open} setOpen={() => setOpen(!open)} />}
          {!open && <CreateNewChat />}
          <Image src="/images/logo.png" alt="logo" width={145} height={60} />
          <p className="text-lavender">
            <span className="flex items-center mt-4">
              1.0
              <i className='bx bx-chevron-down text-2xl text-lavender'></i>
            </span>
          </p>
        </header>
        <div className="flex grow justify-center overflow-hidden">
           {children}
           {chat}
        </div>
      </div>
    </div>
  );
}

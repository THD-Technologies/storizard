//file: /home/page.tsx
import Chat from "./chat/page";
import { kanit } from "@/public/font";
import Info from "../components/Info";
import { auth } from "@/auth";


/*Create a function that checks if there are any chats in the history array.
If not, write code that detects it. */
export default async function HomePage() {
  const session = await auth();
    return (
        <div className="flex flex-col items-center px-32 justify-center">
          <h1 className={`flex items-center text-2xl mt-4 ${kanit.className}`}>
            Welcome back, {session?.user?.name}! Let's weave your story with magic!
            <i className='bx bx-star'></i>
          </h1>
          <div className="flex flex-grow py-14">
            <Info />
          </div>
          <div className="mt-auto mb-4">
            <Chat />
          </div>
        </div>
    );
  }
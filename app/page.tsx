// File: app/page.tsx
import Home from "./home/layout";

export default function Main({
  children,
  chat
}: {
  children: React.ReactNode;
  chat: React.ReactNode;
}) {
  return (
    <Home chat={chat}>
      {children}
    </Home>
  );
}
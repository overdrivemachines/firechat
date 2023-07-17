import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../Landing";
import { ChatRoom } from "../ChatRoom";

// <AuthenticatedApp> will render a router that contains two routes:
// one with path / that takes us to a <Landing> component,
// and another with the path /room/:id that renders a <ChatRoom> component.
function AuthenticatedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AuthenticatedApp };

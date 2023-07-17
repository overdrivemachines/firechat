import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;

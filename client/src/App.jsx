import { useState, useEffect } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Full Stack App</h1>
      <p className="text-gray-600 mb-8">{message}</p>
      <TodoApp />
    </div>
  );
}

export default App;

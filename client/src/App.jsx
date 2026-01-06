import { useSocket } from "./hooks/useSocket";

function App() {
  const { getSocket } = useSocket();

  const handleClick = () => {
    const socket = getSocket();
    if (!socket) return;

    console.log("Socket ID:", socket.id);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Scriblio Clone</h1>
      <button onClick={handleClick}>Test Socket</button>
    </div>
  );
}

export default App;

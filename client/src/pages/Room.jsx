import { useState } from "react";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";

const Room = () => {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(4);
  const [clearSignal, setClearSignal] = useState(0);

  const username = "You";

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <div className="h-screen flex flex-col">
      <Toolbar
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        onClear={() => setClearSignal((v) => v + 1)}
      />

      {/* Canvas wrapper MUST be relative */}
      <div className="flex-1 relative">
        <Canvas
          color={color}
          size={size}
          clearSignal={clearSignal}
          onPointerMove={setCursor}
        />

        {/* Cursor tooltip */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: cursor.x + 12,
            top: cursor.y + 12,
          }}
        >
          <div className="px-2 py-1 text-xs bg-black text-white rounded shadow">
            {username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

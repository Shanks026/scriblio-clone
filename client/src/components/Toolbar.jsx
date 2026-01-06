const Toolbar = ({ color, setColor, size, setSize, onClear }) => {
  return (
    <div className="flex gap-4 items-center p-2 border-b bg-gray-50">
      <label className="flex items-center gap-2">
        Color
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>

      <label className="flex items-center gap-2">
        Size
        <input
          type="range"
          min="1"
          max="20"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </label>

      <button
        onClick={onClear}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        Clear
      </button>
    </div>
  );
};

export default Toolbar;

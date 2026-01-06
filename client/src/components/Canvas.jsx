import { useEffect, useRef } from "react";

const Canvas = ({ color, size, clearSignal, onPointerMove }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef({ x: 0, y: 0 });

  // Initialize canvas and handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    ctxRef.current = ctx;

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Clear canvas when requested
  useEffect(() => {
    if (!ctxRef.current || !canvasRef.current) return;

    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  }, [clearSignal]);

  // Convert pointer event to canvas coordinates
  const getPoint = (e) => {
    if (!canvasRef.current) return { x: 0, y: 0 };

    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Start drawing
  const startDrawing = (e) => {
    const point = getPoint(e);
    isDrawingRef.current = true;
    lastPointRef.current = point;
    onPointerMove?.(point);
  };

  // Handle pointer movement (draw + cursor tracking)
  const handlePointerMove = (e) => {
    const point = getPoint(e);

    // Always update cursor position
    onPointerMove?.(point);

    if (!isDrawingRef.current) return;

    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = size;

    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();

    lastPointRef.current = point;
  };

  // Stop drawing
  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-white cursor-crosshair"
      onPointerDown={startDrawing}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDrawing}
      onPointerLeave={stopDrawing}
    />
  );
};

export default Canvas;

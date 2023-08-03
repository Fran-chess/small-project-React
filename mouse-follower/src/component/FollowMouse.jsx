import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  const handleClick = () => {
    setEnable(!enabled);
  };

  return (
    <main className="grid place-content-center h-screen">
      {enabled && (
        <div
          style={{
            position: "absolute",
            top: -20,
            left: -20,
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "red",
            pointerEvents: "none",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      )}
      <h1 className="text-3xl font-bold underline mb-10">Hello world!</h1>
      <button onClick={handleClick} className="border border-red-700">
        {enabled ? "Disable" : "Enable"} Mouse Follow
      </button>
    </main>
  );
};

export default FollowMouse;

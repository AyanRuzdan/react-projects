import { useCallback, useEffect } from "react";
import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function util(length) {
    return Math.floor(Math.random() * length);
  }

  const handleCreateRandomHexColor = useCallback(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[util(hex.length)];
    }

    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback(() => {
    const r = util(256);
    const g = util(256);
    const b = util(256);

    setColor(`rgb(${r},${g},${b})`);
  }, []);

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor, handleCreateRandomRgbColor, handleCreateRandomHexColor]);

  return (
    <div className="container">
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "30px",
            flexDirection: "column",
          }}
        >
          <h1>{typeOfColor === "rgb" ? "RGB: " : "HEX: "}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}

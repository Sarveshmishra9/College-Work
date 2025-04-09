import React, { useState } from 'react';

const State3 = () => {
  const [total, setTotal] = useState(0); // State for Total
  const [favoriteColor, setFavoriteColor] = useState("black"); // State for the "this" heading color

  return (
    <div>
      {/* Total Section */}
      <h1>Total: {total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        Bdhta hua
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        Ghtata hua
      </button>

      {/* Favorite Color Section */}
      <h1>
        My favorite color is{" "}
        <span style={{ color: favoriteColor }}>{favoriteColor}</span>
      </h1>
      <button onClick={() => setFavoriteColor("blue")}>Blue</button>
      <button onClick={() => setFavoriteColor("red")}>Red</button>
      <button onClick={() => setFavoriteColor("pink")}>Pink</button>
      <button onClick={() => setFavoriteColor("green")}>Green</button>
    </div>
  );
};

export default State3;

import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a ejecutar...");

  return (
    <button
      className="btn btn-secondary"
      onClick={() => {
        increment(2);
      }}
    >
      Incrementar
    </button>
  );
});

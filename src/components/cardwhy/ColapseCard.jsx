'use client'

import { useState } from "react";

export default function CollapsibleCards() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Mostrar Menos" : "Mostrar Más"}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">Carta 1</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Carta 2</div>
        {expanded && (
          <>
            <div className="bg-white p-4 rounded-lg shadow-md">Carta 3</div>
            <div className="bg-white p-4 rounded-lg shadow-md">Carta 4</div>
          </>
        )}
      </div>
    </div>
  );
}
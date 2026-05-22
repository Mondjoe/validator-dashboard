"use client";

import { useState, useEffect } from "react";
import { validators } from "@/lib/validators";

export function ValidatorSwitcher({ onSelect }: { onSelect: (v: any) => void }) {
  const [selected, setSelected] = useState(validators[0].id);

  useEffect(() => {
    const saved = localStorage.getItem("selected-validator");
    if (saved) {
      setSelected(saved);
      const v = validators.find((x) => x.id === saved);
      if (v) onSelect(v);
    } else {
      onSelect(validators[0]);
    }
  }, []);

  function choose(id: string) {
    setSelected(id);
    localStorage.setItem("selected-validator", id);
    const v = validators.find((x) => x.id === id);
    if (v) onSelect(v);
  }

  return (
    <div className="panel fade-in" style={{ display: "flex", gap: 10 }}>
      {validators.map((v) => (
        <div
          key={v.id}
          onClick={() => choose(v.id)}
          style={{
            padding: "10px 15px",
            borderRadius: 8,
            cursor: "pointer",
            border: selected === v.id ? "1px solid #2affff" : "1px solid #1f1f28",
            color: selected === v.id ? "#2affff" : "#ccc",
            boxShadow:
              selected === v.id
                ? "0 0 15px rgba(0,255,255,0.2)"
                : "0 0 0 rgba(0,0,0,0)",
            transition: "0.2s",
          }}
        >
          {v.label}
        </div>
      ))}
    </div>
  );
}
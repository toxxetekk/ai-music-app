"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [audio, setAudio] = useState("");

  async function generate() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setAudio(data.url);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>AI Music Generator</h1>

      <textarea
        placeholder="Describe your song..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />

      <br /><br />

      <button onClick={generate}>Generate</button>

      {audio && (
        <div style={{ marginTop: 20 }}>
          <audio controls src={audio} />
        </div>
      )}
    </main>
  );
}

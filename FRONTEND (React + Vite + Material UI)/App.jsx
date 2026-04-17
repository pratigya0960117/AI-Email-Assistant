import { useState } from "react";
import { Button, TextField, Select, MenuItem } from "@mui/material";

function App() {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("formal");
  const [output, setOutput] = useState("");

  const generateEmail = async () => {
    const res = await fetch("http://localhost:8080/api/email/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt, tone })
    });

    const data = await res.json();
    setOutput(data.email);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Email Assistant</h2>

      <TextField
        fullWidth
        label="Enter Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Select value={tone} onChange={(e) => setTone(e.target.value)}>
        <MenuItem value="formal">Formal</MenuItem>
        <MenuItem value="casual">Casual</MenuItem>
        <MenuItem value="apology">Apology</MenuItem>
      </Select>

      <Button variant="contained" onClick={generateEmail}>
        Generate
      </Button>

      <div style={{ marginTop: 20 }}>
        <h3>Generated Email:</h3>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;

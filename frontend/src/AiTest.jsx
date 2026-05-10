import { useState } from 'react';
import { model } from './lib/gemini'; // This uses the file you just made!

export default function AiTest() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askGemini = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const result = await model.generateContent(prompt);
      setResponse(result.response.text());
    } catch (error) {
      setResponse("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Gemini AI Test</h3>
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Ask Gemini something..."
        style={{ padding: '10px', width: '70%', color: 'black' }}
      />
      <button onClick={askGemini} disabled={loading} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '15px', color: '#333' }}>
        <strong>AI Response:</strong>
        <p>{response || "Waiting for your question..."}</p>
      </div>
    </div>
  );
}

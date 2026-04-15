import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'inline-block' }}>
      <p>Licznik: <strong>{count}</strong></p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: '8px' }}>+</button>
    </div>
  );
}

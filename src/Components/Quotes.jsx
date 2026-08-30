import { useEffect, useState } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes));
  }, []);

  return (
    <div className="quotes-container">
      <h1>✨ Quotes</h1>

      {quotes.map((q) => (
        <div className="quote-card" key={q.id}>
          <p>"{q.quote}"</p>
          <span>— {q.author}</span>
        </div>
      ))}
    </div>
  );
}
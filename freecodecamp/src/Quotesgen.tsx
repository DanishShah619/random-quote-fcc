import React, { useState, useEffect } from "react";
import axios from "axios";
import { Quote } from "./assets/Types";

const QuoteBox: React.FC = () => {
  const [quote, setQuote] = useState<Quote>({ content: "", author: "" });

  
  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote({ content: response.data.content, author: response.data.author });
    } catch (error) {
      console.error("Error fetching quote", error);
    }
  };

  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div id="quote-box" className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg">
      <p id="text" className="text-xl font-semibold">"{quote.content}"</p>
      <p id="author" className="text-right mt-2">- {quote.author}</p>
      <div className="mt-4 flex gap-4">
        <button id="new-quote" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="bg-blue-700 text-white px-4 py-2 rounded"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" - ${quote.author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;

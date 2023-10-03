import React, { useState, useEffect } from 'react';
import { v4 as id } from 'uuid';

const loadingMessage = <h2>Please wait for a while, data is loading....</h2>;
const errorMessage = <h2>Oops, something went wrong!!!</h2>;

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': 'Cz3X6t/5WTMsc6fY3K05/w==WRecSYbzEfJenmYP' },
          contentType: 'application/json',
        });
        const response = await data.json();
        setQuotes(response);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuotes, setIsLoading]);

  return (
    <div style={{ textAlign: 'center', margin: '4rem 3rem' }}>
      {isLoading ? loadingMessage : null}
      {hasError ? errorMessage : null}
      {quotes && Array.isArray(quotes)
        && quotes.map((data) => (
          <div key={id()}>
            <h1>
              &ldquo;
              {data.quote}
              &rdquo;
            </h1>
            <h2>
              {data.author}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default Quotes;

import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = 'Kandy Korner | Home';
  }, []);

  return (
    <section className="home">
      <h2 className="home__header">Welcome to Kandy Korner</h2>
      <p className="home__description">To be completely honest, I'm not like one hundred percent sure what this website is intended to be, like if it is supposed to be like a specific candy store's website that has multiple locations or is it like a catalog of different candy stores you could go to, but regardless WELCOME!</p>
    </section>
  );
};
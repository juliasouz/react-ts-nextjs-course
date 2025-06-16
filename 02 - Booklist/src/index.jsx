import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL600_SR600,400_.jpg"
    alt="The Housemaid"
  />
);
const Title = () => {
  return <h2>The Housemaid</h2>;
};
const Author = () => <h4>Freida McFadden</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

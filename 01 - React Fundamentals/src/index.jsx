import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  const [name, setName] = React.useState("");

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Greetings!</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <p>What's your name?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "6px", fontSize: "12px" }}
          />
        </li>
      </ul>
      <Message name={name} />
    </div>
  );
}

const Person = ({ name }) => {
  return <>{name}</>;
};

const Message = ({ name }) => {
  return <h2>Hello, {name ? <Person name={name} /> : "World"}!</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

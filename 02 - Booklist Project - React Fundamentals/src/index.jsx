import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "The Housemaid",
    title: "Freida McFadden",
    img: "./images/book-1.jpg",
    id: 1,
    description:
      "Every day I clean the Winchesters' beautiful house top to bottom. I collect their daughter from school. And I cook a delicious meal for the whole family before heading up to eat alone in my tiny room on the top floor. I try to ignore how Nina makes a mess just to watch me clean it up. How she tells strange lies about her own daughter...",
  },
  {
    author: "Carley Fortune",
    title: "One Golden Summer",
    img: "./images/book-2.jpg",
    id: 2,
    description:
      "Good things happen at the lake. That's what Alice's grandmother says, and it's true. Alice spent just one summer there at a cottage with Nan when she was seventeen—it's where she took that photo, the one of three grinning teenagers in a yellow speedboat, the image that changed her life. Now Alice lives behind a lens...",
  },
  {
    author: "Stephen King",
    title: "Never Flinch: A Novel",
    img: "./images/book-3.jpg",
    id: 3,
    description:
      "When the Buckeye City Police Department receives a disturbing letter from a person threatening to 'kill thirteen innocents and one guilty' in 'an act of atonement for the needless death of an innocent man,' Detective Izzy Jaynes has no idea what to think. Are fourteen citizens about to be slaughtered in an unhinged act of retribution?",
  },
  {
    author: "Jonathan Haidt",
    title: "The Anxious Generation",
    img: "./images/book-4.jpg",
    id: 4,
    description:
      "A must-read for all parents: the generation-defining investigation into the collapse of youth mental health in the era of smartphones, social media, and big tech—and a plan for a healthier, freer childhood. 'With tenacity and candor, Haidt lays out the consequences that have come with allowing kids to drift further into the virtual world...",
  },
  {
    author: "Fredrik Backman",
    title: "My Friends: A Novel",
    img: "./images/book-5.jpg",
    id: 5,
    description:
      "Most people don't even notice them—three tiny figures sitting at the end of a long pier in the corner of one of the most famous paintings in the world. Most people think it's just a depiction of the sea. But Louisa, an aspiring artist herself, knows otherwise, and she is determined to find out the story of these three enigmatic figures...",
  },
  {
    author: "Margaret Atwood",
    title: "The Handmaid's Tale",
    img: "./images/book-6.jpg",
    id: 6,
    description:
      "In Margaret Atwood's dystopian future, environmental disasters and declining birthrates have led to a Second American Civil War. The result is the rise of the Republic of Gilead, a totalitarian regime that enforces rigid social roles and enslaves the few remaining fertile women. A Handmaid bound to produce children for one of Gilead's commanders.",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { description, ...rest } = book;
        return (
          <Book {...rest} key={book.id}>
            <p>{description}</p>
            <button>Start Reading</button>
          </Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

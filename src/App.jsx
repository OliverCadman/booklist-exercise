import "./App.css";

import bookArray from "./books";
import Book from "./Book";

function App() {

  // Define the getBook function in the parent.
  const getBook = (id) => {
    const book = bookArray.find(book => book.id === id);
    console.log(book);
  }
  return (
    <section className="booklist">
      {bookArray.map((book, index) => {
        const { id, img, title, author } = book;

        {/** Pass the getBook function down into the Book component, as props. */}
        return <Book key={id} id={id} img={img} title={title} author={author} getBook={getBook}/>;
      })}
    </section>
  );
}

export default App;


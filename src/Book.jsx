// Contains our Book component
function Book({ id, img, title, author, getBook, children }) {
    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
        <button className="btn" onClick={() => getBook(id)}>Get Book</button>
      </article>
    );
  }
  
  export default Book;
  
import axios from "axios";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";

const bibleId = "06125adad2d5898a-01";
const headers = {
  headers: {
    "api-key": "ce33f25bfb3b581f13a3527f2dc4ba2a",
  },
};

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapter, setChapter] = useState(null);

  const getBooks = async () => {
    const { data } = await axios.get(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`,
      headers
    );
    setBooks(data.data);
  };

  const getChapters = async () => {
    const { data } = await axios.get(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${selectedBook.id}/chapters`,
      headers
    );

    setChapters(data.data);
  };

  const getChapter = async () => {
    const { data } = await axios.get(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${selectedChapter.id}`,
      headers
    );

    setChapter(data.data);
  };

  const handleBack = () => {
    if (selectedChapter) {
      setSelectedChapter(null);
      setChapter(null);
    } else if (selectedBook) {
      setSelectedBook(null);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if (selectedBook) {
      getChapters();
    }
  }, [selectedBook]);

  useEffect(() => {
    if (selectedChapter) {
      getChapter();
    }
  }, [selectedChapter]);

  return (
    <Container className="container">
      <Header />
      {!selectedBook && (
        <>
          <p style={{ paddingRight: "1.5rem" }}>Select a book</p>
          <div>
            {books.map((book) => {
              return (
                <Button key={book.id} onClick={() => setSelectedBook(book)}>
                  {book.id}
                </Button>
              );
            })}
          </div>
        </>
      )}
      {selectedBook && !selectedChapter && (
        <>
          <p>
            <button onClick={handleBack}>
              <BiSolidLeftArrow />
            </button>
            Select a chapter
          </p>
          <div>
            {chapters.map((chapter) => {
              return (
                <Button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter)}
                >
                  {chapter.number}
                </Button>
              );
            })}
          </div>
        </>
      )}
      {selectedChapter && chapter && (
        <>
          <p>
            <button onClick={handleBack}>
              <BiSolidLeftArrow />
            </button>
            {chapter.reference}
          </p>
          <section
            dangerouslySetInnerHTML={{
              __html: chapter.content.replaceAll("<span", "<br/> <span"),
            }}
          />
        </>
      )}
    </Container>
  );
};

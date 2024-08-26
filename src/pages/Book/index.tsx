import { useEffect, useState } from "react";
import useTitle from "../../components/useTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import DataTable, { TableColumn } from "react-data-table-component";
import { Book } from "../../interface/Book";
import HeaderBar from "../../components/HeaderBar";
import Button from "../../components/Input/Button";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../../store/bookSlice";
function Books() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useTitle("Livres");
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const { books } = useAppSelector((state) => state.books);
  const data: Book[] = books || [];
  const columns: TableColumn<Book>[] = [
    {
      name: "isbn",
      selector: (row: Book) => row.isbn,
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBook = data?.filter((row: Book) => {
    // console.log(row);
    if (row && row.title) {
      const titleMatch = row.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return titleMatch;
    }
    return false;
  });
  const handleClick = () => {
    navigate("/books/add");
  };

  return (
    <div>
      <HeaderBar
        placeholder="Entrez le nom du livre souhaité"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        name="search"
      >
        <Button Icon={IoIosAdd} onClick={handleClick} />
      </HeaderBar>
      <DataTable columns={columns} data={filteredBook} />
    </div>
  );
}

export default Books;

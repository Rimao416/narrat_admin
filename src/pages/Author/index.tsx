import { useEffect, useState } from "react";
import { fetchAuthors } from "../../store/authorSlice";
import { IoIosAdd } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";
import useTitle from "../../components/useTitle";
import DataTable, { TableColumn } from "react-data-table-component";
import { Author as AuthorType } from "../../interface/Author";
import HeaderBar from "../../components/HeaderBar";
import Button from "../../components/Input/Button";

function Author() {
    const navigate=useNavigate()
  useTitle("Auteurs");
  const handleClick = () => {
    navigate("/authors/add");
  };
  const dispatch = useAppDispatch();
  const columns: TableColumn<AuthorType>[] = [
    {
      name: "Nom",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "Nationalite",
      selector: (row) => row.nationality,
      sortable: true,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const { authors } = useAppSelector((state) => state.authors);
  const data: AuthorType[] = authors || [];
  const filteredAuthors = data?.filter((row: AuthorType) => {
    // console.log(row);
    if (row && row.fullname) {
      const nameMatch = row.fullname
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch;
    }
    return false;
  });
  console.log(authors);
  return (
    <div>
      <HeaderBar
        placeholder="Entrez le nom de l'auteur souhaité"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        name="search"
      >
        <Button Icon={IoIosAdd} onClick={handleClick} />
      </HeaderBar>
      <DataTable columns={columns} data={filteredAuthors} />
    </div>
  );
}

export default Author;

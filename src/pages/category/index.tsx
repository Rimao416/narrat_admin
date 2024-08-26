import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchCategories } from "../../store/categorySlice";
import HeaderBar from "../../components/HeaderBar";
import Button from "../../components/Input/Button";
import { IoIosAdd } from "react-icons/io";
import useTitle from "../../components/useTitle";

// Définir l'interface CategoryRow en dehors du composant Category
interface CategoryRow {
  id: string;
  name: string;
  // Ajoutez d'autres champs si nécessaire
}

function Category() {
  const dispatch = useAppDispatch();
  useTitle("Catégories");
  const handleClick = () => {
    console.log("Button clicked!");
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { categories } = useAppSelector((state) => state.categories);
  const data: CategoryRow[] = categories || [];

  const columns: TableColumn<CategoryRow>[] = [
    {
      name: "ID",
      selector: (row: CategoryRow) => row.id,
      sortable: false,
      width: "100px",
    },
    {
      name: "Nom",
      selector: (row: CategoryRow) => row.name,
      sortable: true,
      // width: "100px",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCategories = data?.filter((row: CategoryRow) => {
    // console.log(row);
    if (row && row.name) {
      const nameMatch = row.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch;
    }
    return false;
  });

  return (
    <div>
      <HeaderBar
        placeholder="Entrez le nom de la catégorie souhaitée"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        name="search"
      >
        <Button Icon={IoIosAdd} onClick={handleClick} />
      </HeaderBar>
      <DataTable columns={columns} data={filteredCategories} />
    </div>
  );
}

export default Category;

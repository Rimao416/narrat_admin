import { useEffect, useState } from "react";
import FormWrapper from "../../layouts/FormWrapper";
import TextArea from "../../components/Input/TextArea";
import Multiselect from "multiselect-react-dropdown";
import FormLayout from "../../layouts/FormLayout";
import Input from "../../components/Input/Input";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchCategories } from "../../store/categorySlice";
import { Category } from "../../interface/Category";
import { Book } from "../../interface/Book";
import { Author } from "../../interface/Author";
// interface Option {
//     value: string;
//     label: string;
//   }

function BookSuplement() {
  const dispatch = useAppDispatch();
  const [book, setBook] = useState<Book>({
    id: "",
    isbn: "",
    title: "",
    description: "",
    cover: null,
    pages: 0,
    content: null,
    authors: [],
    status: "",
    categorgy: [],
    audio: { title: "", audio: "", description: "" },
  });

  // load categories
  useEffect(() => {
    dispatch(fetchCategories());
  });

  //   const { authors } = useAppSelector((state) => state.authors);
  const { categories } = useAppSelector((state) => state.categories);
  console.log(categories);
  const categoriesOptions = categories?.map((categorieObj: Category) => ({
    value: categorieObj.id, // You can use the _id as the value
    label: categorieObj.name, // Use the name as the label
  }));
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedAuthors,setSelectedAuthors]=useState<Author[]>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (selectedList: any) => {
    setSelectedCategories(selectedList);
    setBook((prevBook) => ({
      ...prevBook,
      categories: selectedList.map(
        (category: { value: string }) => category.value
      ),
    }));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRemove = (selectedList: any) => {
    // Update the selected classes
    // console.log(selectedList);
    setSelectedCategories(selectedList);
    // console.log("Je m'applique");
    // console.log(removedItem)

    // Update the data state by removing the class
    setBook((prevState) => ({
      ...prevState,
      categories: selectedList.map(
        (category: { value: string }) => category.value
      ),
    }));
  };

  const onSelectAuthor = (selectedList: any) => {
    setSelectedAuthors(selectedList);
    setBook((prevBook) => ({
      ...prevBook,
      authors: selectedList.map(
        (author: { value: string }) => author.value
      ),
    }));
  }
  const onRemoveAuthor = (selectedList: any) => {
    setSelectedAuthors(selectedList);
    setBook((prevBook) => ({
      ...prevBook,
      authors: selectedList.map(
        (author: { value: string }) => author.value
      ),
    }));
  }



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeDoc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;

    if ((name === "cover" || name === "content") && files && files[0]) {
      setBook({
        ...book,
        [name]: files[0],
      });
    } else {
      setBook({
        ...book,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", book.title);
    // formData.append("author", book.authors);
    formData.append("description", book.description);
    book.content && formData.append("content", book.content);
    book.cover && formData.append("cover", book.cover);
    // book.categories.forEach((categoryId, index) => {
    //   formData.append(`categories[${index}]`, categoryId);
    // });

    // console.log(formData.get("categories[0]"));
    // console.log(book);
    // dispatch(createBook(formData)).then((result) => {
    //   console.log(result);
    //   if (
    //     result.payload &&
    //     result.payload.data &&
    //     result.payload.data.book &&
    //     result.payload.data.status == "success"
    //   ) {
    //     // Redirection vers la page des auteurs si l'ajout est réussi
    //     navigate("/books");
    //   } else {
    //     return;
    //     // Gérer les erreurs d'ajout d'auteur ici si nécessaire
    //   }
    // });
  };
  return (
    <div>
      <FormLayout title="Ajouter un livre" onSubmit={handleSubmit}>
        <FormWrapper label="Titre">
          <Input
            type="text"
            placeholder={"Entrez le nom du livre"}
            onChange={handleChange}
            name="title"
            max={1000}
          />
        </FormWrapper>
        <FormWrapper label="Auteur">
          <input type="text" />
        </FormWrapper>
        <FormWrapper label="Categories">
          <Multiselect
            options={categoriesOptions}
            selectedValues={selectedCategories}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="label"
          />
        </FormWrapper>

        <FormWrapper label="Description">
          <TextArea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setBook({ ...book, description: e.target.value })
            }
            name="description"
          />
        </FormWrapper>
        <FormWrapper label="Document (epub, pdf)">
          <input type="file" name="content" onChange={handleChangeDoc} />
        </FormWrapper>
        <FormWrapper label="Photo de couverture">
          <input type="file" name="cover" onChange={handleChangeDoc} />
        </FormWrapper>

        <button className="btn btn--primary">Ajouter</button>
      </FormLayout>
    </div>
  );
}

export default BookSuplement;

import React, { useState } from "react";
import { Author } from "../../interface/Author";
import FormLayout from "../../layouts/FormLayout";
import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import FormWrapper from "../../layouts/FormWrapper";
import { useAppDispatch } from "../../store/store";
import { addAuthors } from "../../store/authorSlice";
// import JoditEditor from "jodit-react";
function Supplement() {
  const [author, setAuthor] = useState<Author>({
    fullname: "",
    photo: null,
    nationality: "",
    bio: "",
    surname: "",
  } as Author);
  const dispatch = useAppDispatch();

  const handleChangePic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;

    if (name === "photo" && files && files[0]) {
      setAuthor({
        ...author,
        [name]: files[0],
      });
    } else {
      setAuthor({
        ...author,
        [name]: value,
      });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor({
      ...author,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // create formData
    const formData = new FormData();
    formData.append("fullname", author.fullname);
    formData.append("bio", author.bio);
    formData.append("surname", author.surname);

    if (author.photo) {
      formData.append("photo", author.photo); // Add the photo only if it's not null
    }
    await dispatch(addAuthors(formData));
    // if(response)
  };
  return (
    <FormLayout title="Ajouter un auteur" onSubmit={handleSubmit}>
      <FormWrapper label="Nom Complet">
        <Input
          type="text"
          placeholder="Entrez le nom de l'auteur"
          onChange={handleChange}
          name="fullname"
        />
      </FormWrapper>
      <FormWrapper label="Nationalité">
        <Input
          type="text"
          placeholder="Entrez la nationalité de l'auteur"
          onChange={handleChange}
          name="nationality"
        />
      </FormWrapper>
      <FormWrapper label="Autre nom">
        <Input
          type="text"
          placeholder="Entrez le nom d'artiste de l'auteur"
          onChange={handleChange}
          name="surname"
        />
      </FormWrapper>
      <FormWrapper label="Biographie">
        <TextArea
          name="bio"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAuthor({ ...author, bio: e.target.value })
          }
        />
        {/* <JoditEditor
          value={author.bio}
          onChange={(newContent) =>
            setAuthor({ ...author, bio: newContent })
          }
        /> */}
        {/* <TextArea */}
      </FormWrapper>
      <FormWrapper label="Photo de l'auteur">
        <input type="file" name="photo" id="" onChange={handleChangePic} />
      </FormWrapper>
      <button type="submit" className="btn btn--primary">
        Confirmer
      </button>
    </FormLayout>
  );
}

export default Supplement;

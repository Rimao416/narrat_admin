import { MdCloudUpload } from "react-icons/md";
import { useState } from "react";
interface ImageProps {
  name: string;
  element: any;
  setElement: any;
}
const Image: React.FC<ImageProps> = ({ name, element, setElement }) => {
  const [image, setImage] = useState(null);
//   const [fileName, setFileName] = useState("Aucun fichier selectionné");
  const handle = (event) => {
    // Logique de l'enfant
    const { files } = event.target;

    // Mettez ici le code de votre onChange d'origine
    // files[0] && setFileName(files[0].name);
    files[0] && setElement({ ...element, [name]: files[0] });
    if (files) {
      setImage(URL.createObjectURL(files[0]));
    }

    // Vous pouvez appeler la fonction onChange du parent ici
    // handleChange && handleChange(event);

    // Ajoutez votre propre logique ici si nécessaire
  };
  return (
    <div
      className="image__wrapper u-margin-top-small"
      onClick={() => document.querySelector(".input-field").click()}
    >
      <input
        name={name}
        type="file"
        className="input-field"
        accept="image/*"
        hidden
        onChange={handle}
      />
      {image ? (
        <img
          className="image__wrapper--image"
          src={image}
          width={150}
          height={150}
          alt={"fileName"}
        />
      ) : (
        <MdCloudUpload color="#1475cf" size={60} />
      )}
    </div>
  );
}

export default Image;

interface TextAreaProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ name, onChange }) => {
  return (
    <textarea
      name={name}
      id=""
      onChange={onChange}
      cols={30}
      rows={10}
      className="textArea"
    ></textarea>
  );
}

export default TextArea;
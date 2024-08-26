interface FormLayoutProps {
  children: React.ReactNode;
  label: string;
}
const FormWrapper: React.FC<FormLayoutProps> = ({ children, label }) => {
  return (
    <div className="form-wrapper">
      <label htmlFor="" className="form-wrapper__label">
        {label}
      </label>
      {children}
    </div>
  );
};
export default FormWrapper;

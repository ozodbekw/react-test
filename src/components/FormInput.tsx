type FormInputProps = {
  label: string;
  type: string;
  placeholder: string;
  styles: string;
  ref: string;
};

function FormInput({ label, type, placeholder, styles, ref }: FormInputProps) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        className={styles}
        ref={ref}
        placeholder={placeholder}
      />
    </fieldset>
  );
}

export default FormInput;

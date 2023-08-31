type inpProps = {
  label: string;
  type: string;
  class?: string;
  placeholder: string;
  changee?: any;
  value?: any;
  req?: boolean;
};

const TSInput = (props: inpProps) => {
  const abc = (val: string) => {
    props.changee(val);
  };
  return (
    <>
      <h6>{props.label}</h6>
      <input
        type={props.type ?? "text"}
        className={props.class}
        placeholder={props.placeholder}
        onChange={(e) => abc(e.target.value)}
        value={props.value}
        required={props.req}
      />
    </>
  );
};

export default TSInput;

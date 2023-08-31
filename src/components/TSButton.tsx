type btnProps = {
  label: string;
  click: any;
  disbaled?: boolean;
  classs: string;
};

const TSButton = (props: btnProps) => {
  const { label, click, disbaled, classs } = props;
  return (
    <button onClick={click} className={classs} disabled={disbaled}>
      {label}
    </button>
  );
};

export default TSButton;

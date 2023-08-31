type propsSelect = {
  label: string;
  getValue: any;
  options: {};
};

const TSSelect = (props: propsSelect) => {
  const getChangeVal = (val: string) => {
    props.getValue(val);
    // console.log(val);
  };
  const { options } = props;
  return (
    <div>
      <h5 className="m-2">{props.label}</h5>
      <select
        className="form-select m-2 bg-transparent form-select-sm"
        style={{ width: "200px" }}
        aria-label="Default select example"
        onChange={(e) => getChangeVal(e.target.value)}
      >
        {options &&
          Array.isArray(options) &&
          options.map((e, i) => (
            <option key={i} value={e.val}>
              {e.display}
            </option>
          ))}
      </select>
    </div>
  );
};

export default TSSelect;

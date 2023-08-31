type inpProp = {
  name: string;
  id: number;
  des: string;
  institute: string;
  userEmail: string;
};

const TSCard = (props: inpProp) => {
  const { name, id, des, institute, userEmail } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Id: {id}</h6>
        <p className="card-text">{des}</p>
        <p className="card-text">Institue: {institute}</p>
        <a href="#" className="card-link">
          {userEmail}
        </a>
        <br />
        <a href="#" className="card-link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default TSCard;

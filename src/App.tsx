import TSButton from "./components/TSButton";
import TSCard from "./components/TSCard";
import TSInput from "./components/TSInput";
import TSSelect from "./components/TSSelect";
import TSTable from "./components/TSTable";

const App = () => {
  let cardRendering = [
    {
      id: 10456,
      name: "Arsalan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fuga",
      institute: "SAIMS",
      userEmail: "arsalan.sohail1934@gmail.com",
    },
    {
      id: 10489,
      name: "Owais",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fuga",
      institute: "KU",
      userEmail: "owaissohail4@gmail.com",
    },
    {
      id: 15698,
      name: "Hassan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fuga",
      institute: "LUMS",
      userEmail: "hassan@gmail.com",
    },
    {
      id: 14568,
      name: "Abc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fuga",
      institute: "KU",
      userEmail: "abc@gmail.com",
    },
    {
      id: 14587,
      name: "Xyz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fuga",
      institute: "KU",
      userEmail: "xyz@gmail.com",
    },
    {
      id: 14568,
      name: "Mno",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fuga",
      institute: "Sir Syed University",
      userEmail: "mno@gmail.com",
    },
  ];

  const data = [
    {
      id: 1,
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
    },
    {
      id: 2,
      first: "Jacob",
      last: "Thornton",
      handle: "@mdo",
    },
    {
      id: 1,
      first: "Larry the Bird",
      last: "Otto",
      handle: "@mdo",
    },
  ];
  return (
    <div className="m-2">
      <h2 className="text-center bg-white text-secondary">
        ReactTS Components Rendering
      </h2>
      <h3>1) Button Component</h3>
      <TSButton
        label="Click me"
        classs="btn btn-primary"
        click={(a: any) => console.log(a)}
      />
      <h3 className="pt-3">2) Input Component</h3>
      <TSInput
        label="Enter your name:"
        type="text"
        placeholder="Name"
        class="form-control w-25"
        changee={(e: any) => console.log(e)}
      />
      <h3 className="pt-3">3) Card</h3>
      <div className="container">
        <div className="row m-0">
          {cardRendering.map((e, i) => {
            return (
              <div key={i} className="col-md-4 pb-2">
                <TSCard
                  name={e.name}
                  id={e.id}
                  des={e.description}
                  institute={e.institute}
                  userEmail={e.userEmail}
                />
              </div>
            );
          })}
        </div>
      </div>
      <h3>4) Select Component</h3>
      <TSSelect
        label="Select Gender:"
        options={[
          { display: "Select Gender" },
          { display: "Male", val: "male" },
          { display: "Female", val: "female" },
          { display: "Custom", val: "custom" },
        ]}
        getValue={(val: string) => console.log(val)}
      />
      <h3>5) Table Component</h3>
      <TSTable
        cols={[
          { displayName: "#", key: "id" },
          { displayName: "First", key: "first" },
          { displayName: "Last", key: "last" },
          { displayName: "Handle", key: "handle" },
        ]}
        datasource={data}
      />
    </div>
  );
};

export default App;

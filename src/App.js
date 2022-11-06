import "./App.css";
import DropdownComponent from "./DropdownComponent";

export default function App() {
  let sampleMultiOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
    "Option 11",
    "Option 12",
  ];
  let sampleSingleOptions = ["Yes", "No", "Maybe"];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-page-title">Dropdown Demo</h1>
      </header>
      <div className="App-dropdowns">
        <DropdownComponent
          title="Multiselect Dropdown"
          isMulti={true}
          dropdownOptions={sampleMultiOptions}
        />
        <DropdownComponent
          title="Single Select Dropdown"
          isMulti={false}
          dropdownOptions={sampleSingleOptions}
        />
      </div>
    </div>
  );
}

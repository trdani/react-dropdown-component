import { useEffect, useState } from "react";
import "./DropdownComponent.css";

export default function DropdownComponent(props) {
  const { title, isMulti, dropdownOptions } = props;

  let [dropdownArrowPushed, setDropdownArrowPushed] = useState(false);
  let [selectionsOnDropdown, setSelectionsOnDropdown] = useState([]);
  let [selectedList, setSelectedList] = useState(title);

  useEffect(() => {
    setSelectedList(renderSelectionList());
  }, [selectionsOnDropdown]);

  let renderSelectionList = () => {
    let currList = "Selection: ";
    for (let op of selectionsOnDropdown) {
      currList += op + ", ";
    }
    return currList.substring(0, currList.length - 2);
  };

  let renderSingleOption = (optionName) => {
    return (
      <button
        key={dropdownOptions.indexOf(optionName)}
        onClick={() => {
          setSelectionsOnDropdown([optionName]);
        }}
        className={
          selectionsOnDropdown.includes(optionName)
            ? "DropdownOption-button DropdownOption-selected"
            : "DropdownOption-button"
        }
      >
        {optionName}
      </button>
    );
  };

  let renderMultiOption = (optionName) => {
    return (
      <button
        key={dropdownOptions.indexOf(optionName)}
        onClick={() => {
          let newSelections = selectionsOnDropdown.slice();
          if (newSelections.includes(optionName)) {
            newSelections.splice(newSelections.indexOf(optionName), 1);
          } else {
            newSelections.push(optionName);
          }
          setSelectionsOnDropdown(newSelections);
        }}
        className={
          selectionsOnDropdown.includes(optionName)
            ? "DropdownOption-button DropdownOption-selected"
            : "DropdownOption-button"
        }
      >
        {optionName}
      </button>
    );
  };

  let renderDropdownOptions = (dropdownOps) => {
    let menuItems = [];
    for (let option of dropdownOps) {
      let component = isMulti
        ? renderMultiOption(option)
        : renderSingleOption(option);
      menuItems.push(component);
    }
    return menuItems;
  };

  return (
    <div className="DropdownComponent-full">
      <div className="DropdownComponent-title-div">
        <h3 className="DropdownComponent-title">{title}</h3>
        <button
          className="DropdownComponent-drop-button"
          onClick={() => setDropdownArrowPushed(!dropdownArrowPushed)}
        >
          {dropdownArrowPushed ? (
            <i className="arrow up"></i>
          ) : (
            <i className="arrow down"></i>
          )}
        </button>
      </div>
      {dropdownArrowPushed ? (
        <div className="DropdownComponent-dropped-vals">
          <div className="box">
            {selectionsOnDropdown.length !== dropdownOptions.length &&
            isMulti ? (
              <button
                onClick={() => {
                  setSelectionsOnDropdown(dropdownOptions.slice());
                }}
              >
                Select All
              </button>
            ) : isMulti ? (
              <button
                onClick={() => {
                  setSelectionsOnDropdown([]);
                }}
              >
                Deselect All
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelectionsOnDropdown([]);
                }}
              >
                None
              </button>
            )}
            {renderDropdownOptions(dropdownOptions)}
          </div>
        </div>
      ) : null}

      {selectionsOnDropdown.length === 0 ? null : (
        <p className="DropdownComponent-selections">{selectedList}</p>
      )}
    </div>
  );
}

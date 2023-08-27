import "./Sidebar.css";
import { v4 as uuidv4 } from "uuid";

function Sidebar({ selectedOption, handleSelectedOption }) {
  const options = ["Edit Items", "Home"];
  return (
    <section className="sidebar-section">
      <div className="options-wrapper">
        {options.map((option) => (
          <div
            className="sidebar-option"
            key={uuidv4()}
            onClick={(e) => handleSelectedOption(e.target.textContent)}
            style={
              selectedOption === option ? { backgroundColor: "#614239" } : null
            }
          >
            {option}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Sidebar;

import { useState } from "react";
import "./App.css";

function App() {
  const [udate, setUDate] = useState("");
  const [uage, setUAge] = useState("___");
  const handleOnChange = (event) => {
    setUDate(event.target.value);
  };

  const calculateAge = () => {
    let currentYear = new Date().getFullYear();
    let int1 = parseInt(udate, 10);
    let int2 = parseInt(currentYear, 10);
    let int3 = int2 - int1;
    if (int3 >= 0) {
      setUAge(int3);
    } else {
      alert("Enter valid year");
    }
  };
  return (
    <>
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={udate}
        onChange={handleOnChange}
      ></input>
      <button onClick={calculateAge}>Calculate Age</button>
      <h2>Your are {uage} years old.</h2>
    </>
  );
}

export default App;

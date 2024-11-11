import { ChangeEvent, useState } from "react";
import Hello from "../components/about/Hello";

const About: React.FC = () => {
  console.log("1. Program Started");
  const [appName, setAppName] = useState("My Big React App");

  const handleAppNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    // entered input value
    console.log(event.target.value);
    setAppName(event.target.value);
  };

  console.log("2. Program Ended");
  return (
    <div>
      <h1>About</h1>
      <input type="text" value={appName} onChange={handleAppNameChange} />
      <button className="btn btn-primary">Click me</button>

      <Hello>
        <h2>Hey</h2>
      </Hello>
      <Hello>
        <h2>Hi</h2>
      </Hello>
      <Hello>
        <p>wow</p>
      </Hello>
    </div>
  );
};

export default About
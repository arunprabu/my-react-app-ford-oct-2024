const About = () => {
  const appName = "My Big React App";

  return (
    <div>
      <h1>About</h1>
      <input type="text" value={appName} />
      <button className="btn btn-primary">Click me</button>
    </div>
  );
}

export default About
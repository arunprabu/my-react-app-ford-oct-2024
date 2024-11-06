import MenuList from "./MenuList";

// Fn component with Anonymous Fn
const Footer = function () {
  // it must return JSX
  return (
    <footer className="text-center">
      <hr/>
      <MenuList />
      <p>Copyright 2024 | Arun</p>
    </footer>
  );
};

export default Footer;
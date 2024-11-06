import MenuList from "./MenuList";

// Fn component with Anonymous Fn
const Footer = function () {
  const copyrightYear = 2024;

  // it must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyrightYear} | Arun</p>
    </footer>
  );
};

export default Footer;
import Nav from "../components/Nav";
import Title from "../components/Title";

// eslint-disable-next-line react/prop-types
function SiteLayout({ children }) {
  return (
    <div className="container">
      <Nav />
      <Title />
      <div className="content">{children}</div>
    </div>
  );
}

export default SiteLayout;

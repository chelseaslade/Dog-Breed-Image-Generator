function Header({ title }) {
  return <header>{title}</header>;
}

Header.defaultProps = {
  title: "Dog Breed Images",
};

export default Header;

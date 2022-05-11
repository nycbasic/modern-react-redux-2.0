
const Route = ({ path, children }) => {
  const { pathname } = window.location;
  return pathname === path ? children : null;
};

export default Route;

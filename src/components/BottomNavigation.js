import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav>
      <Link to="/jobs">Jobs</Link>
      <Link to="/bookmarks">Bookmarks</Link>
    </nav>
  );
};

export default BottomNavigation;

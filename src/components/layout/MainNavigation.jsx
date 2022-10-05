import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className="w-[screen] h-20 flex items-center bg-red-800 px-[10%] justify-between">
      <h1 className="text-[2rem] text-white font-bold">React Meetups</h1>
      <ul className="flex items-baseline p-0 m-0 list-none">
        <li className="ml-12">
          <Link
            to="/"
            className="text-2xl text-red-200 no-underline hover:text-white"
          >
            All Meetups
          </Link>
        </li>
        <li className="ml-12">
          <Link
            to="/new-meetup"
            className="text-2xl text-red-200 no-underline hover:text-white"
          >
            Add new Meetup
          </Link>
        </li>
        <li className="ml-12">
          <Link
            to="/favorites"
            className="text-2xl text-red-200 no-underline hover:text-white"
          >
            My Favorites
            <span className="bg-[#cc2062] text-white rounded-xl px-4 ml-2">
              {favoriteCtx.totalFavorites}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className="my-4">
      <Card>
        <div className="w-[100%] h-80 overflow-hidden rounded-t-md">
          <img
            src={props.image}
            alt={props.title}
            className="w-[100%] object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="mb-4 text-xl font-bold text-gray-700">
            {props.title}
          </h3>
          <address className="mb-4 font-bold">{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="p-6 text-center">
          <button
            onClick={toggleFavoriteStatusHandler}
            className="px-6 py-2 text-red-800 bg-transparent border border-red-800 rounded cursor-pointer hover:bg-pink-400"
          >
            {itemIsFavorite ? "Remove from Favorites" : "Add from Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

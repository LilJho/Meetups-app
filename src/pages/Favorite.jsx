import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

function Favorite() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You have no Favorites. Start adding now.</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Favorites</h1>
      {content}
    </div>
  );
}

export default Favorite;

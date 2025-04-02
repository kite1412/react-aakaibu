import Anime from "mal-models/dist/Anime";
import ListResponse from "mal-models/dist/ListResponse";
import UserMediaList from "mal-models/dist/MediaAnimeList";
import UserAnimeListStatus from "mal-models/dist/UserAnimeListStatus";

export default interface AnimeService {
  getUserAnimeList(token: string): Promise<ListResponse<UserMediaList<Anime, UserAnimeListStatus>>>
}
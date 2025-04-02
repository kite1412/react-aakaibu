import Media from "./Media";
import UserAnimeListStatus from "./UserAnimeListStatus";
export default interface Anime extends Media<UserAnimeListStatus> {
    start_season?: StartSeason;
    broadcast?: Broadcast | null;
    source?: string | null;
    average_episode_duration?: number | null;
    rating?: Rating;
    studios?: Array<Studio>;
}
export type Season = "winter" | "spring" | "summer" | "fall";
export type Rating = "g" | "pg" | "pg_13" | "r" | "r+" | "rx" | null;
interface StartSeason {
    year: number;
    season: Season;
}
interface Broadcast {
    day_of_the_week: string;
    start_time: string | null;
}
interface Studio {
    id: number;
    name: string;
}
export {};
//# sourceMappingURL=Anime.d.ts.map
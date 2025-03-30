import { UserAnimeStatistic } from "./UserAnimeStatistic";
export interface UserInfo {
    id: number;
    name: string;
    picture: string;
    gender: string | null;
    birthday: string | null;
    location: string | null;
    joined_at: string;
    anime_statistics: UserAnimeStatistic | null;
    time_zone: string | null;
    is_supporter: boolean | null;
}
//# sourceMappingURL=UserInfo.d.ts.map
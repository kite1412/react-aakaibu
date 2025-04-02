import { Media } from "./Media";
import { UserListStatus } from "./UserListStatus";
export interface UserMediaList<T extends Media<U>, U extends UserListStatus> {
    node: T;
    list_status: U;
}
//# sourceMappingURL=UserMediaList.d.ts.map
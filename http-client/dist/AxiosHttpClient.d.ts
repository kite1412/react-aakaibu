export declare abstract class AxiosHttpClient {
    protected get<T>({ url, params, bearerToken }: GetRequest): Promise<T>;
    protected post<T>(request: PostRequest): Promise<T>;
    private logAndThrowError;
    private logSuccess;
}
export declare enum ContentType {
    JSON = "application/json",
    FORM_URL_ENCODED = "application/x-www-form-urlencoded"
}
interface PostRequest {
    url: string;
    contentType: ContentType;
    body: unknown;
    bearerToken?: string;
}
interface GetRequest {
    url: string;
    params?: unknown;
    bearerToken?: string;
}
export {};
//# sourceMappingURL=AxiosHttpClient.d.ts.map
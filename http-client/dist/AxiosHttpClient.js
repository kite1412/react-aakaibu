var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export class AxiosHttpClient {
    get(_a) {
        return __awaiter(this, arguments, void 0, function* ({ url, params, bearerToken }) {
            const res = yield axios
                .get(url, {
                params: params,
                headers: Object.assign({}, (bearerToken && { Authorization: `Bearer ${bearerToken}` }))
            })
                .catch(e => {
                this.logAndThrowError(url, e);
            });
            this.logSuccess(url, "Get");
            return res.data;
        });
    }
    post(url, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios
                .post(url, request.body, {
                headers: Object.assign({ "Content-Type": request.contentType }, (request.bearerToken && { Authorization: `Bearer ${request.bearerToken}` }))
            })
                .catch(e => {
                this.logAndThrowError(url, e);
            });
            this.logSuccess(url, "Post");
            return res.data;
        });
    }
    logAndThrowError(url, error) {
        if (error.response) {
            const status = error.response.status;
            const errorMessage = `Error ${url} \n status: ${status} \n message: ${JSON.stringify(error.response.data)}`;
            console.error(errorMessage);
        }
        else {
            console.error(`Network error on attempt: ${url}`);
        }
        throw error;
    }
    logSuccess(url, method) {
        console.log(`Success: ${url}, method: ${method}`);
    }
}
export var ContentType;
(function (ContentType) {
    ContentType["JSON"] = "application/json";
    ContentType["FORM_URL_ENCODED"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));

import { LIST_USER, LIST_FOLLOWERS, SEARCH_USER } from "../constant/Api";
import HTTP from "../utils/HTTP";

class HomeService {
  getAllUsers = () => {
    return HTTP.get(LIST_USER);
  };
  getSearchUser = (text) => {
    return HTTP.get(SEARCH_USER + "?q=" + text + "&per_page=5");
  };
  getFollowerList = () => {
    return HTTP.get(LIST_FOLLOWERS);
  };
  getApiResponse = (url) => {
    return HTTP.get(url);
  };
}

export default new HomeService();

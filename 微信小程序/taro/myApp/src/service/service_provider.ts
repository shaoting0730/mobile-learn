import ServiceMethod from './service_method';
import ServiceUrl from "./service_url";


function newsList() {
  return ServiceMethod.get(ServiceUrl.newsListUrl, {});
}

export default {
  newsList,
}

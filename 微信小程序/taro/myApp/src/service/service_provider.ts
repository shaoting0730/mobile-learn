import ServiceMethod from './service_method';
import ServiceUrl from "./service_url";

function login() {
  return ServiceMethod.get(ServiceUrl.loginUrl, {});
}

export default {
  login
}

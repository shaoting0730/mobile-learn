import ServiceMethod from './service_method';
// import ServiceUrl from "./service_url";

function login() {
  return ServiceMethod.get('', {});
}

export default {
  login
}

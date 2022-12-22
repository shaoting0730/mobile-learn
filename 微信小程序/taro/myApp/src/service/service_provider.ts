import ServiceMethod from './service_method';
import ServiceUrl from "./service_url";


function COVID19Info(address) {
  let url = ServiceUrl.COVID19Url + '?city=' + address;
  return ServiceMethod.get(url,{});
}

function weatherInfo(address) {
  let url  = ServiceUrl.weatherUrl + '?msg=' + address + '&type=1'
  return ServiceMethod.get(url, {});
}

function starInfo(star) {
  let url  = ServiceUrl.starUrl + '?msg=' + star;
  return ServiceMethod.get(url, {});
}

function qqInfo(qq) {
  let url  = ServiceUrl.QQInfo + '?qq=' + qq;
  return ServiceMethod.get(url, {});
}

function newInfo() {
  let url  = ServiceUrl.newsListUrl;
  return ServiceMethod.get(url, {});
}


export default {
  weatherInfo,
  COVID19Info,
  starInfo,
  qqInfo,
  newInfo,
}

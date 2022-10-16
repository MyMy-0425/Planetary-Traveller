import axios from "axios";

export async function autologin() {
  let tem = null
  await axios.get("http://yeyeye.cc:5002/api/loginAuto").then((res) => {
    console.log(res.data);
    tem = res.data
  });
  return tem
}

export async function login(username, password) {
  let r = null
  await axios.get(`http://yeyeye.cc:5002/api/login?username=${username}&password=${password}`).then(async (res) => {
    console.log(res.data);
    r = res.data
  });
  return r
}

export function outlogin(){
  axios.get('http://yeyeye.cc:5002/api/outlogin').then(res=>res.data)
}

export async function getGoods(){
  return await axios.get('http://yeyeye.cc:5002/api/allgoods').then(res=>res.data)
}

export async function getAGood(id){
  return await axios.get('http://yeyeye.cc:5002/api/inputgoods?goodsId=' + id).then(res=>res.data)
}

export async function putInShopCar(id, num, planet){
  return await axios.get(`http://yeyeye.cc:5002/api/putinshopcar?goodsId=${id}&num=${num}&planet=${planet}`).then(res=>res.data)
}

export async function delShopCar(id){
  return await axios.get(`http://yeyeye.cc:5002/api/delShopCar?goodsId=${id}`).then(res=>res.data)
}

export async function getShopCar(){
  return await axios.get(`http://yeyeye.cc:5002/api/getShopCar`).then(res=>res.data)
}


export async function changeGoodNum(data){
  return await axios.post(`http://yeyeye.cc:5002/api/changeGoodNum`,data).then(res=>res.data)
}

export async function changeGoodischeck(data){
  return await axios.post(`http://yeyeye.cc:5002/api/changeGoodischeck`,data).then(res=>res.data)
}

export async function changeGoodischeckAll(data){
  return await axios.get(`http://yeyeye.cc:5002/api/changeGoodischeckAll?c=${data}`).then(res=>res.data)
}

export async function inputOrder(y){
  return await axios.get(`http://yeyeye.cc:5002/api/inputOrder?bug=${y}`).then(res=>res.data)
}

export async function pay(d){
  return await axios.get(`http://yeyeye.cc:5002/api/pay?id=${d}`).then(res=>res.data)
}

export async function getOrder(){
  return await axios.get(`http://yeyeye.cc:5002/api/getOrder`).then(res=>res.data)
}
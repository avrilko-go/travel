let defaultCity='长沙';
try {
  if(localStorage.city){
    defaultCity=localStorage.city;
  }
}catch (e) {

}

export default {
  city:defaultCity
}
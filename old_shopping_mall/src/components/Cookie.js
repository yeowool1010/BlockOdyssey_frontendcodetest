/**
 * @author yeowool
 * @description 쿠키 값 관리하는 함수 컴포넌트
 * getCookie 키값 기준으로 쿠키에 저장된 값을 가져온다 name == 키
 * setCookie 쿠키에 값을 새로 저장한다  name == 키, value == 값, exp == 기간
 * deleteCookie 만료일을 예전으로 설정한 쿠키를 삭제한다.
 **/

const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };

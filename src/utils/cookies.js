'use strict';

export const getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const deleteCookie = (name) => {
  document.cookie = name + '=; max-age=0;';
};

export const parseObjectFromCookie = (cookie) => {
  const decodedCookie = decodeURIComponent(cookie);
  console.log(decodedCookie);
  return JSON.parse(decodedCookie);
};

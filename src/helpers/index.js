export function getCookie(name) {
  let cookie = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return cookie && cookie[2];
}

export function setCookie(name, value, days = 0, hours = 0) {
  let date = new Date();
  if (days || hours) {
    date.setTime(
      date.getTime() + hours * 60 * 60 * 1000 + 24 * 60 * 60 * 1000 * days
    );
    document.cookie =
      name + "=" + value + ";path=/;expires=" + date.toGMTString();
  } else {
    document.cookie = name + "=" + value + ";path=/";
  }
}

export function percentage(value, total) {
  return (value / total) * 100;
}

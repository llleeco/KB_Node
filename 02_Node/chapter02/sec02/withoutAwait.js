//fetch함수는 Promise객체를 리턴한다.
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) //받아온 객체를 json형태로 반환
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

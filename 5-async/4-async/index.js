async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const result = await fetch(url);
  const data = await result.json();
  document.writeln(data.message);
  // end -->
}

const URL = 'http://localhost:8080/rs/lists';
fetchData(URL);

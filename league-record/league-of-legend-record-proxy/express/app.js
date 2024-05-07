const express = require("express");
const app = express();
const port = 3000;

//클라이언트에서 http 요청 메소드 get을 이용해서 host:post로 요청을 보내면 실행되는 라우트
app.get("/", (req, res) => {
  res.send("리그 오브 레게노");
});

app.get('/custom', (req, res) => {
  res.send('get요청에 대한 응답');
});

app.post('/custom', (req, res) => {
  res.send('post요청에 대한 응답');
});

app.all('/custom', (req, res) => {
  res.send('모든 요청에 대한 공통 응답');
});

//app.listen을 이용해서 서버를 실행해준다.
//클라이언트는 'host:post'로 노드 서버에 요청을 보낼 수 있다.
app.listen(port, () => {
  console.log(`서버가 실행됩니다. localhost:${port}`);
});

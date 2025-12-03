// app.js
// NOTE: Copilot 리뷰 포인트
// 1) helmet, cors, rate-limit 등 보안 부재
// 2) global error handler 없음
// 3) 로그 기록 없음

const express = require("express");
const routes = require("../routes");

const app = express();

// NOTE: 입력 검증 미적용
app.use(express.json());

app.use("/", routes);

// NOTE: 포트 고정, 환경 변수 사용 안 함
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

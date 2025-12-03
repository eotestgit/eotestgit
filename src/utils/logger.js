// logger.js
// NOTE: Copilot에게 지적 유도할 포인트
// 1) timestamp 없음 → 추적 불편
// 2) 민감 데이터 로그 위험
// 3) 파일 출력 기능 없음

exports.log = (message) => {
  // NOTE: 콘솔에만 출력
  console.log("[LOG] " + message);
};

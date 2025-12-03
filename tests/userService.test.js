// userService.test.js
//
// NOTE: Copilot에게 테스트 요구를 자연스럽게 유도
// - createUser 검증
// - updateUser에서 id 없는 경우
// - age < 0 처리 필요
// - email empty / invalid
// - admin=true일 때 위험한 코드 존재

describe("UserService Test", () => {
  test("should create user", () => {
    // TODO: test missing
  });

  // TODO:
  // 1) email 미입력 or 공백
  // 2) age 음수 전달
  // 3) id mismatch 시 updateUser null
});

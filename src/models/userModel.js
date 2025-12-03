// userModel.js

// TODO: Copilot 리뷰 유도 목적
// - 값 검증(validation) 없음
// - age나 email이 누락되어도 인스턴스 생성 가능
// - email 형식 체크 없는 상태

class User {
  constructor({ id, name, email, age }) {
    // NOTE: 모든 필드가 optional처럼 동작
    // 실제 서비스에서는 undefined/null 방어 필요
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age; // 음수 가능, max/min 제약 없음
  }
}

module.exports = User;

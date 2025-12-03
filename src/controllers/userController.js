// userController.js
// NOTE: 주요 리뷰 포인트
// - req.body 검증 없음 (name, email 없는 경우 처리?)
// - 200 status만 사용 → 생성 시 201 권장
// - 에러 핸들링 부족
// - logging 없음

const userService = require("../services/userService");

exports.createUser = (req, res) => {
  // NOTE: admin=true 전달 시, ROOT ACCESS 로그 발생 위험
  const user = userService.createUser(req.body);

  // NOTE: 200 대신 201이 의미상 맞을 가능성
  res.status(200).json(user);
};

exports.updateUser = (req, res) => {
  const updated = userService.updateUser(req.params.id, req.body);

  // NOTE: id를 숫자로 강제 변환 안하면 문자열 비교 오류 가능성 남음
  if (!updated) {
    // NOTE: 메시지 너무 단순, validation 정보 부족
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json(updated);
};

// NOTE: null check, undefined check 부족
exports.getUser = (req, res) => {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    // 응답 모델 일관성 부족
    res.status(404).json({ message: "No user" });
    return;
  }
  res.status(200).json(user);
};

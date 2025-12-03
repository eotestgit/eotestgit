// routes.js
// NOTE:
// - route path 일관성 확인 필요
// - API versioning 미적용
// - validation middleware 없음

const express = require("express");
const router = express.Router();
const userController = require("./src/controllers/userController");

// NOTE: body schema validation 없음
router.post("/users", userController.createUser);

router.put("/users/:id", userController.updateUser);

// NOTE: 반환 형태 통일 필요 (404 메시지 불일치)
router.get("/users/:id", userController.getUser);

module.exports = router;

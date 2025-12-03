# Sample Repo for Copilot Code Review Training

이 프로젝트는 Copilot 코드 리뷰 실습을 위해 의도적으로
입력 검증, 에러 처리, 보안 체크 등이 부족하게 구성되어 있습니다.

## 실습 미션

1. 새 브랜치 생성
2. 코드 수정 (validation, error handling, email check 등)
3. Pull Request 생성
4. Copilot에게 다음 요청 수행

### Copilot 프롬프트 템플릿 예시

- 이 PR의 변경사항에서 보안 취약점 가능성이 있는 부분을 리뷰해줘.
- 이 프로젝트의 API 입력 검증이 부족한 부분을 찾아줘.
- 누락된 테스트 케이스를 제안해줘.

## Copilot이 반드시 지적할 수 있는 항목

- email 형식 검증 없음
- age 음수 허용 가능
- admin=true 시 위험한 console log
- try/catch 부재
- null/undefined 처리 부족
- 테스트 케이스 미작성

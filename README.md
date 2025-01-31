# 오픈소스컨설팅 프론트엔드 개발자 과제

이 프로젝트는 API와 Atlassian Design System을 사용하여 사용자 인터페이스를 개발하고 데이터를 시각화하는 웹 애플리케이션입니다.

## 사용 기술

- **React**: 사용자 인터페이스(UI)를 구축하기 위한 라이브러리
- **TypeScript**: 정적 타입 시스템을 활용하여 안전하고 유지보수 가능한 코드를 작성
- **Atlaskit**: Atlassian Design System을 기반으로 한 UI 컴포넌트 라이브러리
- **i18next**: 다국어 지원을 위한 라이브러리
- **Vite**: 빠르고 효율적인 빌드 도구

## 설치 방법

1. **프로젝트 클론**

```bash
  git clone https://github.com/twy8939/osci-test.git
```

2. **의존성 설치**

프로젝트 디렉토리로 이동한 후, 필요한 의존성을 설치합니다.

```bash
  cd osci-test
  npm install
```

3. **환경 변수 설정**

프로젝트에는 .env.example 파일이 포함되어 있습니다.
이 파일을 참고하여 .env 파일을 생성하고 필요한 환경 변수를 설정하세요.

```bash
  cp .env.example .env
```

4. **개발 서버 실행**

프로젝트의 개발 서버를 실행합니다.

```bash
  npm run dev
```

개발 서버는 기본적으로 http://localhost:5173 에서 실행됩니다.
브라우저에서 해당 URL을 열어 애플리케이션을 확인할 수 있습니다.

5. **프로젝트 빌드**

프로덕션용 빌드를 생성하려면 다음 명령어를 사용하세요.

```bash
  npm run build
```

빌드 결과물은 dist 폴더에 생성됩니다.

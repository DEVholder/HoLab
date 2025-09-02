# Holab 프론트엔드 프로젝트
홈서버에서 운영될 마이크로서비스들을 위한 허브 역할을 하는 프론트엔드 애플리케이션입니다.

## 주요 기능

1.  **마이크로서비스 런처:** 개발된 마이크로서비스로 빠르게 리다이렉션하는 카드 형태의 컴포넌트 메뉴를 제공합니다.
    > 추가로 Search Bar를 통해 빠르게 원하는 서비스를 검색하여 찾을 수 있습니다.
2.  **GUI 제공:** 별도의 UI가 없는 간단한 마이크로서비스를 위해 사용자 친화적인 그래픽 인터페이스(GUI)를 제공합니다.

## 기술 스택

- **빌드 도구:** Vite
- **프레임워크:** React
- **UI:** Tailwindcss/vite
- **프로젝트 구조:** Feature-Based Structure(기능 기반 구조)
- **디자인:** 반응형 웹 디자인
- **백엔드 연동:** FastAPI


## 프로젝트 구조

```
frontend
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── layout
│   │       └── Navbar.jsx
│   ├── features
│   │   └── auth
│   │       ├── components
│   │       │   ├── SignInForm.jsx
│   │       │   └── SignUpForm.jsx
│   │       ├── hook
│   │       │   └── useAuth.js
│   │       └── services
│   │           └── authApi.js
│   ├── hooks
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── Home
│   │       └── index.jsx
│   ├── Router.jsx
│   ├── services
│   ├── store
│   └── utils
├── vite.config.js
└── yarn.lock
```

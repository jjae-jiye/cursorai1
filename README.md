# TypeScript + Node.js + Tailwind CSS 프로젝트

TypeScript, Node.js, Express, Tailwind CSS를 사용한 풀스택 웹 애플리케이션입니다.

## 🚀 기술 스택

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **개발 도구**: Nodemon, ts-node

## 📦 설치

```bash
npm install
```

## 🛠️ 개발 서버 실행

```bash
npm run dev
```

서버가 http://localhost:3000 에서 실행됩니다.

## 🏗️ 빌드

```bash
npm run build
```

## 🚀 프로덕션 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
chapter2/
├── src/
│   └── index.ts          # Express 서버 메인 파일
├── public/
│   ├── index.html        # 메인 HTML 파일
│   └── styles.css        # Tailwind CSS 스타일
├── dist/                 # TypeScript 컴파일 결과물
├── package.json
├── tsconfig.json         # TypeScript 설정
├── tailwind.config.js    # Tailwind CSS 설정
├── postcss.config.js     # PostCSS 설정
├── nodemon.json          # Nodemon 설정
└── README.md
```

## 🎯 주요 기능

- ✅ TypeScript 타입 안전성
- ✅ Express 서버
- ✅ Tailwind CSS 스타일링
- ✅ 정적 파일 서빙
- ✅ API 엔드포인트 (/api/hello)
- ✅ 핫 리로드 (Nodemon)
- ✅ 빌드 시스템

## 🔧 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행 (핫 리로드)
- `npm run build`: TypeScript 컴파일
- `npm start`: 프로덕션 서버 실행
- `npm run watch`: TypeScript 파일 변경 감지

## 🌐 API 엔드포인트

- `GET /`: 메인 페이지
- `GET /api/hello`: 테스트 API 응답

## 🎨 Tailwind CSS

Tailwind CSS가 설정되어 있어 유틸리티 클래스를 사용할 수 있습니다.

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Tailwind CSS 스타일링 예시
</div>
``` 
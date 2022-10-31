
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

This project aims to provide a template for creating new projects in react in the future. Feel free to fork and extend the project.

**Setup**

This project uses pnpm as a package management tool, but use any node package management tool to install packages.

```bash
pnpm i #installing base packages
```

**Structure**

```bash
.
├── jestconfig.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── src
│   ├── components
│   │   └── generic.tsx
│   └── index.ts
├── tests
│   └── components
│       └── generic.test.tsx
└── tsconfig.json
```

**Eslint**

Find and fix problems with your code

```bash
pnpm run lint
```


**Prettier**

Format your code

```bash
pnpm run prettier
```

**Tests**

```bash
pnpm run test
```
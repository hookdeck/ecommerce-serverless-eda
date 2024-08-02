# E-Commerce Serverless EDA: Inventory Service

This is an example monorepo demonstrating building a serverless e-commerce event-driven architecture.

![Web Store home page](https://github.com/user-attachments/assets/d0733cf7-059b-431d-b604-593f311c88d3)

## Apps and Packages

The example includes the following packages/apps:

- [`web-store`](apps/web-store/): a [Next.js](https://nextjs.org/) e-commerce example application
- [`inventory`](): a [Next.js](https://nextjs.org/) application exposing services for inventory management API routes
- `@repo/types`: shared type definitions across services in the EDA
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Hosted service dependencies

The application relies on the following hosted services:

- [Hookdeck](https://hookdeck.com/ref=github-serverless-eda-vercel) as an event gateway for inter-service communication
- [Xata](https://xata.io?ref=github-serverless-eda-vercel) for data persistence
- [Vercel](https://vercel.com?ref=github-serverless-eda-vercel) for deployment

## Build

To build all apps and packages, run the following command:

```
cd serverless-eda-vercel
npm build
```

## Develop

To develop all apps and packages, run the following command:

```
cd serverless-eda-vercel
npm dev
```

## Useful Links

Learn more about Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

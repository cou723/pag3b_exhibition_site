# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── components/
│   │   ├── ExplanationTabs.astro
│   │   ├── sections/
│   │   │   ├── About.astro
│   │   │   ├── Demo.astro
│   │   │   ├── Features.astro
│   │   │   ├── Future.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Specs.astro
│   │   │   └── TechnicalDetails.astro
│   │   └── ui/
│   │       ├── GlowCard.astro
│   │       ├── NeonButton.astro
│   │       ├── SectionTitle.astro
│   │       ├── TechButton.astro
│   │       └── TechCard.astro
│   ├── data/
│   │   └── content.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── biome.json
├── eslint.config.mjs
├── astro.config.ts
├── tsconfig.json
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

### 🔍 Static Checks

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm check`           | Run Astro type checking                           |
| `pnpm lint`            | Run Biome linter                               |
| `pnpm lint:fix`        | Run Biome linter with auto-fix                   |
| `pnpm format`          | Run Biome formatter                             |

**Note**: `.astro` files are checked by `astro check`, while `.ts`/`.js` files are checked by Biome.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

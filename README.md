# WoobsBox

Collection of utility classes for TypeScript.

## How to Build

To build WoobsBox, follow these steps:

1. Make sure you have Node.js installed.
2. Clone this repository.
3. Navigate to the root directory of the cloned repository in your terminal.
4. Run the following command to install dependencies:

```bash
pnpm i
```

After installing dependencies, run the following command to build the TypeScript code:

```bash
pnpm run build
```

## How to Use

To use WoobsBox in your project, you can import the individual utility functions as needed. For example:

```typescript
import { setYPositionWithOffset } from "woobsbox";
```

## How to Publish to npm

To publish WoobsBox to npm, follow these steps:

1. Install pnpm if you do not already have it

```bash
npm install -g pnpm
```

2. Make sure you have an npm account and you're logged in. If not, create one and log in using:

```bash
pnpm login
```

3. Run the following command to publish the package to npm:

```bash
pnpm run publish
```

4. Your package should now be published to npm and available for others to install.

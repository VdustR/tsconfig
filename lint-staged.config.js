import process from "node:process";

const isFormat = process.env.TYPE === "format";

/**
 * @type {import('lint-staged').Configuration}
 */
const config = isFormat
  ? {
      "**/*": [
        "eslint --report-unused-disable-directives --fix --max-warnings=0 --no-error-on-unmatched-pattern --no-warn-ignored",
        "prettier --ignore-unknown --write",
      ],
    }
  : {
      "**/*": "cspell lint --no-must-find-files",
    };

export default config;

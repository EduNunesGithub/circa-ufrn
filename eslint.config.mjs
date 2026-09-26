import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  perfectionist.configs["recommended-alphabetical"],
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["./*", "../*"],
              message:
                "R-STYLE-002: import project code through the @/ path alias, not a relative path.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);

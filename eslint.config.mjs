import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import checkFile from "eslint-plugin-check-file";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

const KEBAB = "+([a-z])*([a-z0-9])*(-+([a-z0-9]))";
const ROUTE_SEGMENT = [
  KEBAB,
  `\\(${KEBAB}\\)`,
  `\\[${KEBAB}\\]`,
  `\\[...${KEBAB}\\]`,
  `\\[\\[...${KEBAB}\\]\\]`,
  `\\_${KEBAB}`,
  `\\@${KEBAB}`,
  `\\(.\\)${KEBAB}`,
  `\\(..\\)${KEBAB}`,
  `\\(...\\)${KEBAB}`,
  `\\(..\\)\\(..\\)${KEBAB}`,
].join("|");

const CLASS_START = "(^|[\\s:!])";
const RAW_SPACING = `${CLASS_START}(gap(-[xy])?|p[xytrblse]?)-(0[\\d.]|[1-9]|px\\b|\\[|\\()`;
const RAW_COLOR = `${CLASS_START}(bg|text|border(-[xytrblse])?|divide|outline|ring(-offset)?|fill|stroke|from|via|to|decoration|accent|caret|placeholder)-(\\[(#|rgb|hsl|oklch|oklab|lab|lch|hwb|color|var)|\\((color:)?--)`;
const SPACING_MESSAGE =
  "R-UI-006: gap and padding use only the semantic spacing tokens (gutter, section, block, group, inset, item, label, control), never numeric steps other than 0 or arbitrary values.";
const COLOR_MESSAGE =
  "R-UI-007: colors come only from the theme color tokens; arbitrary color values are forbidden.";

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
      "react/no-multi-comp": "error",
    },
  },
  {
    files: ["{app,components,contexts,hooks,lib}/**/*.{ts,tsx}"],
    plugins: { "check-file": checkFile },
    rules: {
      "check-file/filename-blocklist": [
        "error",
        {
          "{components,contexts,hooks}/*.{ts,tsx}": "<name>/index",
          "{components,contexts}/**/*.ts": "index.tsx",
          "{contexts,hooks}/*/*/**/*": "<name>/index",
          "hooks/**/*.tsx": "index.ts",
        },
        {
          errorMessage:
            "R-STRUCT-003: misplaced file; use components/<name>/index.tsx, hooks/use-<name>/index.ts or contexts/<name>-context/index.tsx.",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        { "{components,contexts,hooks}/**/*.{ts,tsx}": "@(index)" },
        {
          errorMessage:
            "R-STRUCT-004: file not allowed here; a component, hook or context folder holds only its index file.",
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "components/**/": "KEBAB_CASE",
          "contexts/*/": `${KEBAB}-context`,
          "hooks/*/": `use-${KEBAB}`,
        },
        {
          errorMessage:
            "R-STRUCT-003: folder name must be kebab-case; hook folders use-<name>, context folders <name>-context.",
        },
      ],
    },
  },
  {
    files: ["{app,lib}/**/*.{ts,tsx}"],
    plugins: { "check-file": checkFile },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        { "{app,lib}/**/*.{ts,tsx}": "KEBAB_CASE" },
        {
          errorMessage: "R-STRUCT-001: file name must be kebab-case.",
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        { "app/**/": `@(${ROUTE_SEGMENT})`, "lib/**/": "KEBAB_CASE" },
        {
          errorMessage:
            "R-STRUCT-001: folder name must be kebab-case (Next.js route syntax allowed in app/).",
        },
      ],
    },
  },
  {
    files: ["{app,components,contexts,hooks,lib}/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          message: SPACING_MESSAGE,
          selector: `Literal[value=/${RAW_SPACING}/]`,
        },
        {
          message: SPACING_MESSAGE,
          selector: `TemplateElement[value.raw=/${RAW_SPACING}/]`,
        },
        { message: COLOR_MESSAGE, selector: `Literal[value=/${RAW_COLOR}/]` },
        {
          message: COLOR_MESSAGE,
          selector: `TemplateElement[value.raw=/${RAW_COLOR}/]`,
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);

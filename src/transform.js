import path from "path"
import { createConfig } from "./createConfig.js"
import { mergeOptions } from "./mergeOptions.js"

const { transformAsync, transformFromAstSync } = require("@babel/core")

// do not forget this file will be execute from dist/index.js
// so we want root to be ../
const root = path.resolve(__dirname, "../")

export const transform = (code, ...options) => {
  return transformAsync(code, {
    cwd: root,
    // root: cwd,
    ...createConfig(mergeOptions(...options)),
  })
}

export const transformFromAst = (ast, code, ...options) => {
  return transformFromAstSync(ast, code, {
    cwd: root,
    // root: cwd,
    ...createConfig(mergeOptions(...options)),
  })
}

// https://babeljs.io/docs/plugins/
// https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import

import { createModuleOptions } from "./src/options-module.js"
import { createSyntaxOptions } from "./src/options-syntax.js"
import { createMinifyOptions } from "./src/options-minify.js"
import { mergeOptions } from "./src/mergeOptions.js"
import { createConfig } from "./src/createConfig.js"
import { transform, transformFromAst } from "./src/transform.js"

export { createModuleOptions }
export { createSyntaxOptions }
export { createMinifyOptions }
export { mergeOptions }
export { transform, transformFromAst }

export const options = mergeOptions(
  createModuleOptions({
    inputModuleFormat: "es",
    outputModuleFormat: "cjs",
  }),
  createSyntaxOptions(),
)

export const config = createConfig(options)

const { transform, createSyntaxOptions, createModuleOptions } = require("../dist/index.js")

process.chdir("/Users/d.maillard")
transform(
  `import path from 'path'

	const a = true

	export default a
	`,
  createSyntaxOptions(),
  createModuleOptions({
    inputModuleFormat: "es",
    outputModuleFormat: "cjs",
  }),
).then((result) => {
  debugger
})

import { mergeArrayElements } from "./mergeArrayElements.js"

export const mergeOptions = (...objects) => {
  const options = objects.reduce(
    (accumulator, object) => {
      if (typeof object === undefined || object === null) {
        return accumulator
      }
      return {
        ...accumulator,
        ...object,
        presets: object.presets ? [...accumulator.presets, ...object.presets] : accumulator.presets,
        plugins: object.plugins
          ? mergeArrayElements(accumulator.plugins, object.plugins)
          : accumulator.plugins,
      }
    },
    {
      presets: [],
      plugins: [],
    },
  )

  return options
}

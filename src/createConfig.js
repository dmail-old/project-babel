export const createConfig = (options = {}) => {
  return {
    ...options,
    plugins: options.plugins
      ? options.plugins.filter((plugin) => plugin.enabled).map((plugin) => {
          return [plugin.name, plugin.settings]
        })
      : [],
  }
}

const cacheDir = (constants, jekyllSource) => [
  constants.PUBLISH_DIR,
  `${jekyllSource}/.jekyll-cache`,
];

module.exports = {
  async onPreBuild({ constants, inputs, utils }) {
    if (await utils.cache.restore(cacheDir(constants, inputs.jekyllSource))) {
      console.log('Restoring Jekyll cache');
    } else {
      console.log('No Jekyll cache found. Skipping');
    }
  },
  async onPostBuild({ constants, inputs, utils }) {
    if (await utils.cache.save(cacheDir(constants, inputs.jekyllSource))) {
      console.log('Jekyll cache stored');
    } else {
      console.log('Jekyll cache was not found. Please check your config for this plugin');
    }
  },
};

var { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  "setupTestFrameworkScriptFile": "<rootDir>tests/setupTests.js",
  "snapshotSerializers": ["enzyme-to-json/serializer"]
};
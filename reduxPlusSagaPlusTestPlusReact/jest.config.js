module.exports = {

  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "\\.(css|jpg|png|svg|scss)$": "<rootDir>/test/jest-empty-module.js"
  }
}
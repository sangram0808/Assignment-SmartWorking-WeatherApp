module.exports = {
  preset: 'react-native',
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
  setupFiles: ["./jestSetupFile.js"],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/**
 *
 * @type {import('jest').Config}
 */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/*/(.*)$': '<rootDir>/**/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  preset: 'ts-jest',
}

module.exports = createJestConfig(config)

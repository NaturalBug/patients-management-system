
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/query",
  generates: {
    "./src/types.ts": {
      plugins: ['typescript']
    },
    "./src": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "./types.ts"
      },
      documents: "./src/**/*.graphql.ts",
      plugins: ['typescript-operations', 'typescript-react-apollo']
    },
  },
};

export default config;

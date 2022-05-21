import { RollupOptions } from 'rollup';

const config: RollupOptions = {
    input: "src/browser-source.ts",
    output: {
        dir: "dist/",
        format: "iife",
        name: "bundle",
        strict: false,
    }
}

export default config;
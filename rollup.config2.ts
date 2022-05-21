import { RollupOptions } from 'rollup';

const config: RollupOptions = {
    input: "src/control-panel.ts",
    output: {
        dir: "dist/",
        format: "iife",
        name: "bundle",
        strict: false,
    }
}

export default config;
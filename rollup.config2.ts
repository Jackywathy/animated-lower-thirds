import { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';

const config: RollupOptions = {
    input: "src/control-panel.ts",
    output: {
        dir: "dist/",
        format: "iife",
        name: "bundle",
        strict: false,
        sourcemap: true,
    },
    plugins: [typescript({tsconfig: './tsconfig.json'})]
}

export default config;
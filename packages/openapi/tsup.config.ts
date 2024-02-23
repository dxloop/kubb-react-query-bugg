import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  treeshake: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
});

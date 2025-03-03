import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    delay: "src/delay.ts",
  },
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
});

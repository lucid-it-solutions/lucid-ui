import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      type: "css", // ⬅️ This makes SCSS output plain CSS files
    }),
  ],
  external: ["react", "react-dom"], // don't bundle react
  // 👇 Optional: copy CSS into dist so consumers can import it
  loader: {
    ".scss": "css",
  },
});

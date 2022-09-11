import { build } from "@ncpa0cpl/nodepack";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

const relp = (p) => path.resolve(dirname, p);

try {
  build({
    target: "ESNext",
    srcDir: relp("../src"),
    outDir: relp("../dist"),
    tsConfig: relp("../tsconfig.json"),
    formats: ["cjs", "esm", "legacy"],
    declarations: true,
    watch: process.argv.includes("--watch"),
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}

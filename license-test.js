import { isValidFormat, generateDemoKey } from "./src/utils/license.js";

console.log("=== Hermes license format test ===");

const demoKey = generateDemoKey();

console.log("Generated demo key:", demoKey);
console.log("Demo key format:", isValidFormat(demoKey));

const tests = [
  demoKey,
  "INVALID_KEY",
  "",
  "ABC_X7K_91P_4F2",
  "AAAA_BBB_CCC_DDDD"
];

for (const key of tests) {
  try {
    console.log(JSON.stringify(key), "->", isValidFormat(key));
  } catch (error) {
    console.log(JSON.stringify(key), "-> ERROR:", error.message);
  }
}

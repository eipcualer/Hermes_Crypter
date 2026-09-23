import { isValidFormat, generateDemoKey } from "./src/utils/license.js";

console.log("=== Hermes license format test ===");

const demoKey = generateDemoKey();

console.log("\nGenerated demo key:");
console.log(demoKey);

console.log("\nDemo key format:");
console.log(isValidFormat(demoKey));

const tests = [
  demoKey,
  "INVALID_KEY",
  "",
  "ABC_X7K_91P_4F2",
  "AAAA_BBB_CCC_DDDD"
];

console.log("\nTest cases:");

for (const key of tests) {
  let result;

  try {
    result = isValidFormat(key);
  } catch (error) {
    result = `ERROR: ${error.message}`;
  }

  console.log(`${JSON.stringify(key)} -> ${result}`);
}

console.log("\n=== Test completed ===");

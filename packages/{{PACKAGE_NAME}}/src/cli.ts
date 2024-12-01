#!/usr/bin/env node
import { testText } from "{{COMMON_PACKAGE_NAME}}";

const [, , ...args] = process.argv;

console.log(args);
console.log(testText);

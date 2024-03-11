import { WASI } from "https://unpkg.com/@antonz/runno/dist/runno.mjs";

const url = "https://unpkg.com/@antonz/python-wasi/dist/python.wasm";
const result = await WASI.start(fetch(url), {
    args: ["python", "--version"],
    stdout: (out) => console.log(out),
    stderr: (err) => console.error(err),
});
console.log(`exit code = ${result.exitCode}`);
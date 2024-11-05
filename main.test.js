const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Wrong command", async () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);
    const outputs = [];
    const errors = [];

    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stderr.on("data", (chunk) => {
        errors.push(chunk.toString());
    });

    const promise = new Promise((resolve) => {
        main.stdout.on("end", () => {
            const output = outputs.join("").trim();
            resolve(output);
        });
    });

    const output = await promise;
    if (errors.length > 0) {
        console.error("Error Output:", errors.join(""));
    }

    expect(output).toBe("Wrong command!");
});

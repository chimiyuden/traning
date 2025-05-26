// 2. fileOperationAsync.js
// create a new folder called asyncfolder
// insed async
const fs = require("node:fs/promises");
const path = require("node:path");

async function fileOperation () {
  try {
    const file = "task.txt";
    const folder = "AsyncFolder";
    const filePath = path.join(folder, file);

    await fs.mkdir(folder);
    await fs.writeFile(filePath, "Task 1 : Learn node.js Fs module");
    await fs.appendFile(filePath, "\nTask 2: Practice more example");
    const input = await fs.readFile(filePath, "utf-8");
    console.log(input);
    await fs.unlink(filePath);
    await fs.rmdir(folder);
  } catch (error) {
    console.log(error)
  }
}

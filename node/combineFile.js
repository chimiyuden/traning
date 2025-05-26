const fs = require("node:fs");

const appendContentWithDate = (fileName, encoding, newContent, err) => {
  fs.readFile(fileName, encoding, (error, previousContent) => {
    if (error) {
      err("read", error);
      return;
    }
    fs.writeFile(
      fileName,
      `${previousContent}\n 
      
      ----------------------${new Date().toISOString()}---------------------- ${newContent}`,
      (writeError) => {
        if (writeError) {
          err("write", error);
        }
      }
    );
  });
};

module.exports = { appendContentWithDate };

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter filename: ", function(filename) {

    rl.question("Enter file content: ", function(content) {

        // Create and write the file
        fs.writeFile(filename, content, function(err) {

            if (err) {
                console.log("Error creating file.");
                rl.close();
                return;
            }

            console.log("File created successfully.");

            // Read the file
            fs.readFile(filename, "utf8", function(err, data) {

                if (err) {
                    console.log("Error reading file.");
                    rl.close();
                    return;
                }

                console.log("\nFile contents:");
                console.log(data);

                // Ask for additional content
                rl.question("\nEnter additional content: ", function(additionalContent) {

                    // Append content
                    fs.appendFile(filename, "\n" + additionalContent, function(err) {

                        if (err) {
                            console.log("Error appending content.");
                            rl.close();
                            return;
                        }

                        // Read final contents
                        fs.readFile(filename, "utf8", function(err, finalData) {

                            if (err) {
                                console.log("Error reading final file.");
                                rl.close();
                                return;
                            }

                            console.log("\nFinal file contents:");
                            console.log(finalData);

                            rl.close();
                        });
                    });
                });
            });
        });
    });
});

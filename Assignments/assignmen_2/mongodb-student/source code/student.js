
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        // Select database and collection
        const db = client.db("collegeDB");
        const students = db.collection("students");

        // Insert students
        const studentData = [
            {
                rollNo: "23CM001",
                name: "Ravi Kumar",
                branch: "CSE-AIML",
                year: 3,
                marks: 85,
                email: "ravi@example.com"
            },
            {
                rollNo: "23CM002",
                name: "Priya Sharma",
                branch: "CSE-AIML",
                year: 3,
                marks: 92,
                email: "priya@example.com"
            },
            {
                rollNo: "23CM003",
                name: "Arun Kumar",
                branch: "ECE",
                year: 2,
                marks: 68,
                email: "arun@example.com"
            },
            {
                rollNo: "23CM004",
                name: "Neha Singh",
                branch: "CSE",
                year: 4,
                marks: 45,
                email: "neha@example.com"
            },
            {
                rollNo: "23CM005",
                name: "Rahul Das",
                branch: "IT",
                year: 3,
                marks: 78,
                email: "rahul@example.com"
            }
        ];

        await students.insertMany(studentData);
        console.log("\n1. Students inserted successfully");


        // Display all students
        console.log("\n2. All Students:");
        console.log(await students.find({}).toArray());


        // Display students from a particular branch
        console.log("\n3. Students from CSE-AIML:");
        console.log(
            await students.find({ branch: "CSE-AIML" }).toArray()
        );


        // Display students with marks greater than 75
        console.log("\n4. Students with marks greater than 75:");
        console.log(
            await students.find({ marks: { $gt: 75 } }).toArray()
        );


        // Search student using roll number
        console.log("\n5. Search student with rollNo 23CM001:");
        console.log(
            await students.findOne({ rollNo: "23CM001" })
        );


        // Search using a condition
        console.log("\n6. Students in year 3:");
        console.log(
            await students.find({ year: 3 }).toArray()
        );


        // Update marks
        await students.updateOne(
            { rollNo: "23CM001" },
            { $set: { marks: 90 } }
        );

        console.log("\n7. Marks updated for 23CM001");


        // Update another field
        await students.updateOne(
            { rollNo: "23CM002" },
            { $set: { email: "priya_new@example.com" } }
        );

        console.log("Email updated for 23CM002");


        // Delete a student
        await students.deleteOne({ rollNo: "23CM004" });

        console.log("\n8. Student 23CM004 deleted");


        // Display students in descending order of marks
        console.log("\n9. Students sorted by marks:");
        console.log(
            await students.find({}).sort({ marks: -1 }).toArray()
        );


        // Create index on rollNo
        await students.createIndex({ rollNo: 1 });

        console.log("\n10. Index created on rollNo");


        // Display indexes
        console.log("\n11. Available indexes:");
        console.log(
            await students.listIndexes().toArray()
        );


        // Real-Time Extension

        // Students scoring above 80
        console.log("\n12. Students scoring above 80:");
        console.log(
            await students.find({ marks: { $gt: 80 } }).toArray()
        );


        // Students scoring below 50
        console.log("\n13. Students scoring below 50:");
        console.log(
            await students.find({ marks: { $lt: 50 } }).toArray()
        );


        // Highest-scoring student
        console.log("\n14. Highest-scoring student:");
        console.log(
            await students
                .find({})
                .sort({ marks: -1 })
                .limit(1)
                .toArray()
        );


        // Students from a particular branch
        console.log("\n15. Students from CSE branch:");
        console.log(
            await students.find({ branch: "CSE" }).toArray()
        );


        // Students sorted according to marks
        console.log("\n16. Students sorted by marks:");
        console.log(
            await students.find({}).sort({ marks: -1 }).toArray()
        );

    } catch (error) {
        console.log("Error:", error);
    } finally {
        await client.close();
        console.log("\nMongoDB connection closed");
    }
}

main();

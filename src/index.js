const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();
require('dotenv').config();
const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

const userQuestion = prompt("Insérer votre question : ");
const csvFilePath = path.join(__dirname, '../data/question_answer.csv');

async function main() {
    if (!userQuestion) {
        console.log("Veuillez entrer la question !");
    } else {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: userQuestion }],
            model: "gpt-3.5-turbo",
        });

        const assistantResponse = completion.choices[0].message.content;
        console.log(assistantResponse);

        const qaEntry = {
            question: userQuestion,
            answer: assistantResponse
        };

        let existingData = [];
        try {
            const fileContent = fs.readFileSync(csvFilePath, 'utf8');
            if (fileContent.trim() !== '') {
                existingData = JSON.parse(fileContent);
            }
        } catch (error) {
            console.error('Error reading or parsing the existing file:', error.message);
        }

        existingData.push(qaEntry);

        fs.writeFileSync(csvFilePath, JSON.stringify(existingData, null, 2), 'utf8');
    }
}

main();

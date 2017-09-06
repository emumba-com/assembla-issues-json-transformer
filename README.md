# JSON Transformer for Assembla Tickets
Converts pseudo JSON exported from [Assembla](https://www.assembla.com) Tickets to standard JSON format

## Problem Statement
If you export Tickets from an Assembla project account, you get a file in a "JSON-like" format. Other systems may not recognize the file format if you try to import it there.

## This Solution
This utility fixes the problem by parsing the file and outputing data in a standard JSON format, ready to be fed and understood by other systems.

## Dependencies
This project requires following dependencies to work:
- NodeJS
- NPM

## How to Run
- Clone the project to your local system.
- Open `index.js` and modify `INPUT_FILE_PATH` and `OUTPUT_FILE_PATH`.
- Open terminal, switch to project's root directory.
- Run: npm install
- Run: npm start

Now open the file you set in `OUTPUT_FILE_PATH`. There you've your data in standard JSON format. You're welcome :)

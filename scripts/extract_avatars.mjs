import fs from 'fs';

const logPath = 'C:/Users/Anupam Baral/.gemini/antigravity-ide/brain/c533a782-6c77-4b05-9329-4295809d1238/.system_generated/logs/transcript_full.jsonl';
if (!fs.existsSync(logPath)) {
  console.log('Log file does not exist');
  process.exit(1);
}

const content = fs.readFileSync(logPath, 'utf8');

const lines = content.split('\n');
console.log('Total lines:', lines.length);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Sanish Bhandari')) {
    console.log(`Match at line ${i}:`);
    const idx = lines[i].indexOf('Sanish Bhandari');
    const snippet = lines[i].substring(Math.max(0, idx - 400), Math.min(lines[i].length, idx + 400));
    console.log('Snippet:', snippet);
  }
}


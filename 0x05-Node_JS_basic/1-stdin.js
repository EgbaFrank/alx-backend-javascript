// interact with user
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
  process.stdin.pause();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});

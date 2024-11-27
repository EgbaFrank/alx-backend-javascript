process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	let chunk = process.stdin.read();
	if (chunk) {
  process.stdout.write(`Your name is: ${chunk.toString()}`);
	}
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

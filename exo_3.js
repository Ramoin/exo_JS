	let floor = prompt("Combien d'étages veux-tu à la pyramide ?");
	let i = 1;

	do {
		console.log(" ".repeat(floor - i) + "#".repeat(i))
		i ++
	} while (i <= floor);
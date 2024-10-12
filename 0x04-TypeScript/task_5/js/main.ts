interface MajorCredits {
	credits: number;
	brand: 'Major';
}

interface MinorCredits {
	credits: number;
	brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {brand: 'Major', credits: subject1.credits + subject2.credits};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {brand: 'Minor', credits: subject1.credits + subject2.credits};
}


const mjSub1: MajorCredits = {brand: 'Major', credits: 5};
const mjSub2: MajorCredits = {brand: 'Major', credits: 3};

const mnSub1: MinorCredits = {brand: 'Minor', credits: 2};
const mnSub2: MinorCredits = {brand: 'Minor', credits: 3};

console.log(sumMajorCredits(mjSub1, mjSub2));
console.log(sumMinorCredits(mnSub1, mnSub2));

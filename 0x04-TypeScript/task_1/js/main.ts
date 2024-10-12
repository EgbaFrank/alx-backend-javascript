interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): void;
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
	console.log(`${firstName[0]}. ${lastName}`)
}	

interface Student {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements Student{
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

printTeacher("John", "Doe")

const student: Student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName(), student.lastName, student.firstName);

import { Subjects } from './subjects/Teacher';
import { Subjects as CppSubjects } from './subjects/Cpp';
import { Subjects as ReactSubjects } from './subjects/React';
import { Subjects as JavaSubjects } from './subjects/Java';

export const cpp = new CppSubjects.Cpp;
export const java = new JavaSubjects.Java;
export const react = new ReactSubjects.React;
const cTeacher: CppSubjects.Teacher = {
	firstName: "Guillaume",
	lastName: "Salva",
	experienceTeachingC: 10
};

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

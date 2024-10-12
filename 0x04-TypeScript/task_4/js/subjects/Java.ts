import { Subjects } from './Teacher';
import { Subjects as S } from './Subject';

export namespace Subjects {
	interface Teacher extends S.Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends S.Subject {
		getRequirements() {
			return 'Here is the list of requirements for Java';
		}

		getAvailableTeacher() {
			if (this.getTeacher() && this.getTeacher().experienceTeachingJava) {
				return `Available Teacher: ${this.getTeacher().firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}

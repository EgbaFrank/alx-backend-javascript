import { Subjects } from './Teacher';
import { Subjects as S } from './Subject';

declare global {
export namespace Subjects {
	export interface Teacher extends Subjects.Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends S.Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}

		getAvailableTeacher(): string {
			if (this.getTeacher() && this.getTeacher().experienceTeachingC) {
				return `Available Teacher: ${this.getTeacher().firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}
}

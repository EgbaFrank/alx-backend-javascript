import { Subjects } from './Cpp';
import { Subjects as S } from './Subject';

export namespace Subjects {
	interface Teacher extends S.Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends S.Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}

		getAvailableTeacher(): string {
			if (this.getTeacher() && this.getTeacher().experienceTeachingReact) {
				return `Available Teacher: ${this.getTeacher().firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	
	}
}

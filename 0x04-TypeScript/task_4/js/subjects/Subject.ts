import { Subjects } from './Teacher';

export namespace Subjects {
	export class Subject {
		setTeacher(teacher: Subjects.Teacher) {
			this.teacher = teacher;
		}

		getTeacher(): Subjects.Teacher | null {
			return this.teacher;
		}

	}
}

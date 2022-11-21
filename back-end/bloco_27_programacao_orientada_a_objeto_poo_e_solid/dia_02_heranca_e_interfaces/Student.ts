import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _papersGrades: number[];
  constructor(
    name: string, 
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._papersGrades = [];
  }

  get enrollment(): string { return this._enrollment; }

  set enrollment(value: string) { 
    if (value.length < 16) { 
      throw new Error('A matrícula deve possuir pelo menos 16 caracterres');
    }
    this._enrollment = value; 
  }

  // eslint-disable-next-line class-methods-use-this
  generateEnrollment(): string {
    // eslint-disable-next-line max-len
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }

  get examsGrades(): number[] { return this._examsGrades; }
  set examsGrades(value: number[]) { 
    if (value.length > 4) {
      throw new Error('Student can not have more than 4 exams grades.');
    }
    this._examsGrades = value; 
  }

  get papersGrades(): number[] { return this._papersGrades; }
  set papersGrades(value: number[]) { 
    if (value.length > 2) {
      throw new Error('Student can only have 2 grades of papers');
    }
    this._papersGrades = value; 
  }

  addGrade(): number {
    return [...this.examsGrades, ...this.papersGrades].reduce((acc, grade) => {
      const total = acc + grade; return total;
    }, 0);
  }

  averageGrad(): number {
    const numberOfGrades = (this.examsGrades.length + this.papersGrades.length);
    const average = this.addGrade() / numberOfGrades;
    return average;
  }
}

const studentMary = new Student('Mary', new Date('1987/02/18'));
console.log(studentMary);
studentMary.examsGrades = [8, 7, 4, 2];
studentMary.papersGrades = [10, 9];
console.log('soma das notas:', studentMary.addGrade());
console.log('media das notas:', studentMary.name, studentMary.averageGrad());
console.log('numero de matricula é:', studentMary.enrollment);
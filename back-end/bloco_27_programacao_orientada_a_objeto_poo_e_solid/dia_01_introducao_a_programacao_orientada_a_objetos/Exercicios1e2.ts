class Student {
  private _enrollment: number;
  private _name: string;
  private _examsGrades: number[];
  private _papersGrades: number[];
  constructor(
    matricula: number, 
    name: string, 
  ) {
    this._enrollment = matricula;
    this._name = name;
    this._examsGrades = [];
    this._papersGrades = [];
  }

  get enrollment(): number { return this._enrollment; }

  set enrollment(value: number) { this._enrollment = value; }

  get name(): string { return this._name; }
  set name(value: string) { 
    if (value.length < 3) {
      throw new Error('Name must have 3 characters or more.'); 
    }
    this._name = value;
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

const studentMary = new Student(123, 'Mary');
console.log(studentMary);
studentMary.examsGrades = [8, 7, 4, 2];
studentMary.papersGrades = [10, 9];
console.log('soma das notas:', studentMary.addGrade());
console.log('media das notas:', studentMary.name, studentMary.averageGrad());

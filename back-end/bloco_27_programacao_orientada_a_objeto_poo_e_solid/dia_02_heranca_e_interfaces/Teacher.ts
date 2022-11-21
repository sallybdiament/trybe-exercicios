import Person from './Person';
import IEmployee from './IEmployee';
import Subject from './Subject';

export default class Teacher extends Person implements IEmployee {
  private _subject: Subject;
  private _salary: number;
  private _registration = String();
  private _admissionDate: Date;
  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve ter no mínimo 16 carácteres');
    }
    this._registration = value;
  }

  get salary(): number { return this._salary; }
  set salary(value: number) {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo');
    }
    this._salary = value;
  }

  get admissionDate(): Date { return this._admissionDate; }
  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) { 
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }
    this._admissionDate = value;
  }

  // eslint-disable-next-line class-methods-use-this
  generateRegistration(): string {
    // eslint-disable-next-line max-len
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }
}

// eslint-disable-next-line max-len
const bestTeacher = new Teacher('Joao', new Date('1987/02/18'), 8750, new Subject('Matemática'));
// console.log(bestTeacher);

// deve retornar erro
// eslint-disable-next-line max-len
// const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), -2000, new Subject('math'));
// console.log(invalidTeacherSalary);

// deve retornar erro
const today = new Date();
today.setDate(today.getDate() + 1);
const tomorrow = today;
bestTeacher.admissionDate = tomorrow;

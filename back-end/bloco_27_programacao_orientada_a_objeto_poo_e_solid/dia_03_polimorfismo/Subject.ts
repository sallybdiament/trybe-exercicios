export default class Subject {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name(): string { return this._name; }
  set name(value: string) {
    if (value.length < 3) {
      throw new Error('name must have at least 3 characters');
    }
    this._name = value;
  }
}

const subjectMath = new Subject('Maths');
const subjectEnglish = new Subject('English');
const subjectPortuguese = new Subject('Portugues');

console.log('Subject1 created:', subjectMath);
console.log('Subject created:', subjectEnglish);
console.log('Subject created:', subjectPortuguese);
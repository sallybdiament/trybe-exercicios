/* eslint-disable class-methods-use-this */
export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string { return this._name; }
  set name(value: string) { 
    if (value.length < 3) {
      throw new Error('O nome está muito curto');
    }
    this._name = value; 
  }

  get birthDate(): Date { return this._birthDate; }
  set birthDate(value: Date) { 
    this.validateBirthDate(value);
    this._birthDate = value; 
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    console.log('retorno de new Date():', new Date());
    console.log('retorno de new Date().getTime():', new Date().getTime());
    console.log('retorno de value.getTime():', value.getTime());
    const yearInMilliseconds = 31_536_000_000;
    console.log('retorno de yearInMilliseconds:', yearInMilliseconds);
    return Math.floor(diff / yearInMilliseconds);
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) { 
      throw new Error('A data de nascimento não pode ser uma data no futuro'); 
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximos 120 anos');
    }
  }
}

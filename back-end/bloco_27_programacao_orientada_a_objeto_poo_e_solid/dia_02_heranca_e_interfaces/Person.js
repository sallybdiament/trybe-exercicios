"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome está muito curto');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (value) {
            this.validateBirthDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime());
        console.log('retorno de new Date():', new Date());
        console.log('retorno de new Date().getTime():', new Date().getTime());
        console.log('retorno de value.getTime():', value.getTime());
        var yearInMilliseconds = 31536000000;
        console.log('retorno de yearInMilliseconds:', yearInMilliseconds);
        return Math.floor(diff / yearInMilliseconds);
    };
    Person.prototype.validateBirthDate = function (value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro');
        }
        if (Person.getAge(value) > 120) {
            throw new Error('A pessoa deve ter no máximos 120 anos');
        }
    };
    return Person;
}());
exports.default = Person;
var pessoaLuanda = new Person('Luanda', new Date('1980/01/25'));
console.log(pessoaLuanda);

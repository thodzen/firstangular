// import * as fromHr from './hr/employee';
import { Employee } from './hr/employee';

describe('writing jasmine specs', () => {
  it('is easy', () => {
    const a = 10;
    const b = 20;

    const answer = a + b;

    expect(answer).toBe(30);
  });
});

describe('variables and stuff', () => {
  it('declaring variables', () => {
    let x; // total hold my beer // "let" can be any type

    x = 'tacos';
    expect(typeof (x)).toBe('string');

    x = 3.14;
    expect(typeof (x)).toBe('number');

    x = (a, b) => a + b;
    expect(typeof (x)).toBe('function');
  });

  it('declaring a variable with a type', () => {
    let x: number | string;

    x = 12;

    x = 'Tacos';

    // x = {'dog', 'cat'};
  });

  it('initalizes a variable', () => {
    let x = 22;

    x = 32;

    // x = 'Tacos';
  });

  it('has some literals', () => {
    const bigNumber = 1_000_000; // can use underscores to make it look more readable
    expect(bigNumber).toBe(1000000);
    const color = 0xff; // base 16
    const song = 0b10101; // binary base 2
    const permission = 0o344; // octal base 8

    const someArray = ['dog', 'cat', 99];
    const movie = {
      title: 'Thor Ragnorak',
      director: 'Taika Waititi',
      yearReleased: 2017
    };

    expect(movie.title).toBe('Thor Ragnorak');
    movie.yearReleased = 2018;
    // etc.
  });

  it('string literals', () => {
    const myName = 'Jeff';

    const myStory = `Chapter 1
    It was a dark and stormy night.
    The end`;

    const myPay = 32.50;

    let message = 'The name is ' + myName + ' and the pay is $;' + myPay + '.';
    message = `The name is ${myName} and the pay is $${myPay}.`;
  });

  it('array literals', () => {
    const stuff: (string | number)[] = [];
    // or
    // const stuff: Array<string | number> = [];
    stuff[0] = 'Tamales';
    stuff[1] = 99;
  });
  it('using const and let', () => {
    const PI = 3.1415;
    // PI = 3 // cannot change the value of const

    const friends = ['David', 'Amy', 'Billy'];
    friends[3] = 'William'; // this works because arrays can be changed even when it's a const

    const movie = {
      title: 'Jaws',
      director: 'Spielberg',
      yearReleased: 1978
    };
    movie.yearReleased = 1977; // this works
  });
  describe('functions', () => {
    it('two kinds', () => {

      expect(add(2, 2)).toBe(4);
      // named functions
      // in c# int add(int a, int b) { ... }
      function add(a: number, b: number): number {
        return a + b;
      }

      // Anonymous function
      const subtract = (a: number, b: number) => a - b;
      expect(subtract(10, 2)).toBe(8);
    });

    describe('array methods', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      it('going through each element of an array', () => {
        numbers.forEach(n => console.log(n));
      });
      it('can change something to another thing', () => {
        // select in c#
        const doubled = numbers.map(n => n + n);
        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
      });
      it('can filter', () => {
        // like c#s 'where' LINQ method
        const evens = numbers.filter(n => n % 2 === 0); // it'll talk about the triple equals in a second
        expect(evens).toEqual([2, 4, 6, 8]);
      });

    });

  });
});

describe('interfaces and duck typing', () => {

  describe('interfaces', () => {

    it('an object literal has a data type', () => {

      interface Person {
        firstName: string;
        lastName: string;
        department: string;
        age?: number; // variable with a ? means it doesn't need to be included
      }
      const bob: Person = {
        firstName: 'Bob',
        lastName: 'Smith',
        department: 'DEV',
        age: 38
      };
      const jane: Person = {
        firstName: 'Bob',
        lastName: 'Smith',
        department: 'QA'
      };
      // bob.firstname = 'Robert';
    });
    it('supports duck typing', () => {
      interface IHaveAMessage { message: string; } // note: the 'I' thing in interfaces in Typescript isn't so much a thing as in c#
      function logIt(thing: IHaveAMessage) {
        console.log(thing.message);
      }

      const phoneCall = {
        from: 'Mom',
        message: 'Call me'
      };
      logIt(phoneCall);
    });
  });
  describe('using modules', () => {

    it('creating an instance of a class', () => {
      const employee = new Employee();
      employee.firstName = 'Robert';
      employee.lastName = 'Smith';
      employee.department = 'Singer';

      const info = employee.getInfo();
      expect(info).toBe('employee Robert Smith is a Singer');
    });
  });

});


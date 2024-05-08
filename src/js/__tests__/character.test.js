/* eslint-disable no-undef */
import Character from "../character";


test('Invalid length name', () => {
    expect(() => new Character ('s', 'Bowman')).toThrow('Invalid length name');
});

test('Name is not string', () => {
    expect(() => new Character (1, 'Bowman')).toThrow('Name is not string');
});


test('Invalid type of character', () => {
    expect(() => new Character ('Hero', 'Necromancer')).toThrow('Invalid type of character');
});

test('Charcter is dead', () => {
    const someCharacter = new Character('Somename', 'Bowman');
    someCharacter.health = 0
    expect(() => someCharacter.levelup()).toThrow('Character is dead');
})

test('Character level up', () => {
    const newCharacter = new Character('someName', 'Bowman', 25, 25);
    newCharacter.levelup()
    const expectedResult = {
        name: 'someName',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };
    expect(newCharacter).toEqual(expectedResult);
})

test('Inflict damage to Character', () => {
    const newCharacter = new Character('someName', 'Bowman', 25, 25);
    newCharacter.damage(50)
    const expectedResult = {
        name: 'someName',
        type: 'Bowman',
        health: 62.5,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(newCharacter).toEqual(expectedResult);    
})


test('Inflict damage to Character and health >= 0', () => {
    const newCharacter = new Character('someName', 'Bowman', 25, 25);
    newCharacter.health = 0;
    newCharacter.damage(50);
   
    expect(newCharacter.health).toEqual(0);    
})

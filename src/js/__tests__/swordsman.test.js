/* eslint-disable no-undef */
import Swordsman from "../swordsman";

test('New character Swordsman', () => {
    const swordsman = new Swordsman('someName');
    const expectedResult = {
        name: 'someName',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(swordsman).toEqual(expectedResult);
});
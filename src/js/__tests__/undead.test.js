/* eslint-disable no-undef */
import Undead from "../undead";

test('New character Bowman', () => {
    const undead = new Undead('someName');
    const expectedResult = {
        name: 'someName',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(undead).toEqual(expectedResult);
});
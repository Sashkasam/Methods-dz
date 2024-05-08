/* eslint-disable no-undef */
import Bowman from "../bowman";

test('New character Bowman', () => {
    const bowman = new Bowman('someName');
    const expectedResult = {
        name: 'someName',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(bowman).toEqual(expectedResult);
});
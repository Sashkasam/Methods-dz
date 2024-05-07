/* eslint-disable no-undef */
import Magician from "../magician";

test('New character Magician', () => {
    const magician = new Magician('someName');
    const expectedResult = {
        name: 'someName',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(magician).toEqual(expectedResult);
});
/* eslint-disable no-undef */
import Zombie from "../zombie";

test('New character Zombie', () => {
    const zombie = new Zombie('someName');
    const expectedResult = {
        name: 'someName',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(zombie).toEqual(expectedResult);
});
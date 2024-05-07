/* eslint-disable no-undef */
import Daemon from "../daemon";

test('New character Daemon', () => {
    const daemon = new Daemon('someName');
    const expectedResult = {
        name: 'someName',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(daemon).toEqual(expectedResult);
});
import { Apiraiser } from '../index';

Apiraiser.init('https://backend.captainpassword.com');

const result = await Apiraiser.authentication.login({
  username: 'tester',
  password: '12345678',
  toJsonObject: () => {
    return '';
  },
});

console.log(result);

// test('My Greeter', () => {
//   expect(Greeter('Carl')).toBe('Hello Carl');
// });

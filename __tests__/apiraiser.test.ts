import { JsonHelper } from '../lib/cjs/helpers';
import { LoginRequest } from '../lib/cjs/interfaces';

test('Apiraiser toJsonObject', () => {
  const loginRequest: LoginRequest = {
    username: 'test',
    email: null,
    password: 'P@ssword1',
  };

  const loginRequestToBe: any = {
    Username: 'test',
    Email: null,
    Password: 'P@ssword1',
  };
  expect(JsonHelper.toJsonObject<LoginRequest>(loginRequest).Username).toBe(loginRequestToBe.Username);
});

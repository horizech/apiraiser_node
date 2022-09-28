import { Apiraiser } from '../lib/index';

const run = async () => {
  Apiraiser.init('');

  const result = await Apiraiser.authentication.login({
    username: '',
    password: '',
    toJsonObject: () => {
      return '';
    },
  });

  console.log(result);
};

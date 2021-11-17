import {
  REACT_NATIVE_APP_V1_URL,
  REACT_NATIVE_APP_V1_TIMEOUT,
  // eslint-disable-next-line import/no-unresolved
} from '@env';

const EnvConfig = {
  API_URL: REACT_NATIVE_APP_V1_URL,
  API_TIMEOUT: REACT_NATIVE_APP_V1_TIMEOUT
    ? Number(REACT_NATIVE_APP_V1_TIMEOUT)
    : 30000,
};
export default EnvConfig;

import { API } from '../../base.request';

export const propertiesRequest = data => {
  return API.request({
    method: 'GET',
    url: `challenge`,
    data,
  });
};

// @flow

import * as yup from 'yup';

import type { AwsRegion, AccessTokenResponse } from './types';

const validatorAccessTokenResponse = yup.object().shape({
  access_token: yup.string().required(),
  token_type: yup.string().required(),
  refresh_token: yup.string().required(),
  expires_in: yup.number().required().positive().integer(),
});
export function validateAccessTokenResponse(value: any): AccessTokenResponse {
  validatorAccessTokenResponse.isType(value);
  validatorAccessTokenResponse.validateSync(value);
  return value;
}

const validatorAwsRegion = yup.mixed().oneOf(['us', 'eu', 'fe']).required();
export function validateAwsRegion(value: any): AwsRegion {
  validatorAwsRegion.isType(value);
  validatorAwsRegion.validateSync(value);
  return value;
}

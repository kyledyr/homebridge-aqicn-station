import { PlatformIdentifier, PlatformName } from 'homebridge';

export type AqicnPlatformConfig = {
  platform: PlatformName | PlatformIdentifier;
  name?: string;
  api_key?: string;
  station?: string;
  polling_minutes?: number;
  inactive_hours?: number;
};

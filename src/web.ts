import { WebPlugin } from '@capacitor/core';

import type { AvailableOptions, VerifyOptions, BiometricPlugin } from './definitions';

export class BiometricWeb extends WebPlugin implements BiometricPlugin {
  async isAvailable(): Promise<AvailableOptions> {
    throw Error("IsAvailable not implemented on web")
  }

  async verify(options: { reason: string }): Promise<VerifyOptions> {
    throw Error("verify not implemented on web")
  }
}

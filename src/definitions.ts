export interface ErrorCode {
  error: number;
  description: string;
}

export interface AvailableOptions {
  has: boolean;
  status: ErrorCode;
  type: string;
}

export interface VerifyOptions {
  verified: boolean;
  status: ErrorCode;
}

export interface BiometricPlugin {
  isAvailable(): Promise<AvailableOptions>;
  verify(options: { reason: string }): Promise<VerifyOptions>;
}

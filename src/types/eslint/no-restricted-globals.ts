// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedGlobals0 = [
  'off' | 'error' | 'warn',
  ...(
    | string
    | {
        name: string;
        message?: string;
      }
  )[],
];

export type NoRestrictedGlobals = 'off' | NoRestrictedGlobals0;

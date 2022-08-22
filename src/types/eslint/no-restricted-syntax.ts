// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoRestrictedSyntax0 = [
  'off' | 'error' | 'warn',
  ...(
    | string
    | {
        selector: string;
        message?: string;
      }
  )[],
];

export type NoRestrictedSyntax = 'off' | NoRestrictedSyntax0;

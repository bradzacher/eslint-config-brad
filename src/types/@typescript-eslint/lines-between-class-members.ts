// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type LinesBetweenClassMembers0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown;
      },
    ];

export type LinesBetweenClassMembers = 'off' | LinesBetweenClassMembers0;

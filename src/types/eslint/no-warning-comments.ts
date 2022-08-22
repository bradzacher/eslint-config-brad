// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoWarningComments0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        terms?: string[];
        location?: 'start' | 'anywhere';
      },
    ];

export type NoWarningComments = 'off' | NoWarningComments0;

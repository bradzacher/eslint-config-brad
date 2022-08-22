// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoLargeSnapshots0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maxSize?: number;
        inlineMaxSize?: number;
        allowedSnapshots?: {
          [k: string]: unknown[];
        };
      },
    ];

export type NoLargeSnapshots = 'off' | NoLargeSnapshots0;

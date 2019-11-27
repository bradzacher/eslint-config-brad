// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type YieldStarSpacing0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          }
      ),
    ];

export type YieldStarSpacing = 'off' | YieldStarSpacing0;

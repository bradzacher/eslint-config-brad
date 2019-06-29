// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type GeneratorStarSpacing0 = [
    ('off' | 'error' | 'warn'),
    (
        | ('before' | 'after' | 'both' | 'neither')
        | {
              before?: boolean;
              after?: boolean;
              named?:
                  | ('before' | 'after' | 'both' | 'neither')
                  | {
                        before?: boolean;
                        after?: boolean;
                    };
              anonymous?:
                  | ('before' | 'after' | 'both' | 'neither')
                  | {
                        before?: boolean;
                        after?: boolean;
                    };
              method?:
                  | ('before' | 'after' | 'both' | 'neither')
                  | {
                        before?: boolean;
                        after?: boolean;
                    };
          }),
];

export type GeneratorStarSpacing = 'off' | GeneratorStarSpacing0;

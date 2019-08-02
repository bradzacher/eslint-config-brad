// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ArrayElementNewline0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      (
        | ('always' | 'never' | 'consistent')
        | {
            multiline?: boolean;
            minItems?: number | null;
          }),
    ];

export type ArrayElementNewline = 'off' | ArrayElementNewline0;

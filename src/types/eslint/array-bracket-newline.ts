// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ArrayBracketNewline0 = [
    ('off' | 'error' | 'warn'),
    (
        | ('always' | 'never' | 'consistent')
        | {
              multiline?: boolean;
              minItems?: number | null;
          }),
];

export type ArrayBracketNewline = 'off' | ArrayBracketNewline0;

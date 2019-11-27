// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SpaceBeforeBlocks0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never')
        | {
            keywords?: 'always' | 'never' | 'off';
            functions?: 'always' | 'never' | 'off';
            classes?: 'always' | 'never' | 'off';
          }
      ),
    ];

export type SpaceBeforeBlocks = 'off' | SpaceBeforeBlocks0;

// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type BanTsComment0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        'ts-expect-error'?: boolean | 'allow-with-description';
        'ts-ignore'?: boolean | 'allow-with-description';
        'ts-nocheck'?: boolean | 'allow-with-description';
        'ts-check'?: boolean | 'allow-with-description';
        minimumDescriptionLength?: number;
      },
    ];

export type BanTsComment = 'off' | BanTsComment0;

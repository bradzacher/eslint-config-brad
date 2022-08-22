// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type BanTsComment0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        'ts-expect-error'?:
          | boolean
          | 'allow-with-description'
          | {
              descriptionFormat?: string;
              [k: string]: unknown;
            };
        'ts-ignore'?:
          | boolean
          | 'allow-with-description'
          | {
              descriptionFormat?: string;
              [k: string]: unknown;
            };
        'ts-nocheck'?:
          | boolean
          | 'allow-with-description'
          | {
              descriptionFormat?: string;
              [k: string]: unknown;
            };
        'ts-check'?:
          | boolean
          | 'allow-with-description'
          | {
              descriptionFormat?: string;
              [k: string]: unknown;
            };
        minimumDescriptionLength?: number;
      },
    ];

export type BanTsComment = 'off' | BanTsComment0;

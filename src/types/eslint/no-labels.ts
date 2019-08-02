// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoLabels0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowLoop?: boolean;
        allowSwitch?: boolean;
      },
    ];

export type NoLabels = 'off' | NoLabels0;

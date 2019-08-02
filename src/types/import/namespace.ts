// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Namespace0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        /**
         * If `false`, will report computed (and thus, un-lintable) references to namespace members.
         */
        allowComputed?: boolean;
      },
    ];

export type Namespace = 'off' | Namespace0;

// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedProperties0 = [
  ('off' | 'error' | 'warn'),
  ...(
    | {
        object: string;
        property?: string;
        message?: string;
      }
    | {
        object?: string;
        property: string;
        message?: string;
      })[],
];

export type NoRestrictedProperties = 'off' | NoRestrictedProperties0;

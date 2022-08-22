// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type PreferSnapshotHint0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'multi'];

export type PreferSnapshotHint = 'off' | PreferSnapshotHint0;

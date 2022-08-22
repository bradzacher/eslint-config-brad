// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnsupportedFeaturesEsBuiltins0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        version?: string;
        ignores?: (
          | 'Array.from'
          | 'Array.of'
          | 'BigInt'
          | 'Map'
          | 'Math.acosh'
          | 'Math.asinh'
          | 'Math.atanh'
          | 'Math.cbrt'
          | 'Math.clz32'
          | 'Math.cosh'
          | 'Math.expm1'
          | 'Math.fround'
          | 'Math.hypot'
          | 'Math.imul'
          | 'Math.log10'
          | 'Math.log1p'
          | 'Math.log2'
          | 'Math.sign'
          | 'Math.sinh'
          | 'Math.tanh'
          | 'Math.trunc'
          | 'Number.EPSILON'
          | 'Number.isFinite'
          | 'Number.isInteger'
          | 'Number.isNaN'
          | 'Number.isSafeInteger'
          | 'Number.MAX_SAFE_INTEGER'
          | 'Number.MIN_SAFE_INTEGER'
          | 'Number.parseFloat'
          | 'Number.parseInt'
          | 'Object.assign'
          | 'Object.fromEntries'
          | 'Object.getOwnPropertySymbols'
          | 'Object.is'
          | 'Object.setPrototypeOf'
          | 'Object.values'
          | 'Object.entries'
          | 'Object.getOwnPropertyDescriptors'
          | 'Promise'
          | 'Promise.allSettled'
          | 'Proxy'
          | 'Reflect'
          | 'Set'
          | 'String.fromCodePoint'
          | 'String.raw'
          | 'Symbol'
          | 'Int8Array'
          | 'Uint8Array'
          | 'Uint8ClampedArray'
          | 'Int16Array'
          | 'Uint16Array'
          | 'Int32Array'
          | 'Uint32Array'
          | 'BigInt64Array'
          | 'BigUint64Array'
          | 'Float32Array'
          | 'Float64Array'
          | 'DataView'
          | 'WeakMap'
          | 'WeakSet'
          | 'Atomics'
          | 'SharedArrayBuffer'
          | 'globalThis'
        )[];
      },
    ];

export type NoUnsupportedFeaturesEsBuiltins =
  | 'off'
  | NoUnsupportedFeaturesEsBuiltins0;

// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoHideCoreModules0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: (
          | 'assert'
          | 'buffer'
          | 'child_process'
          | 'cluster'
          | 'console'
          | 'constants'
          | 'crypto'
          | 'dgram'
          | 'dns'
          | 'events'
          | 'fs'
          | 'http'
          | 'https'
          | 'module'
          | 'net'
          | 'os'
          | 'path'
          | 'querystring'
          | 'readline'
          | 'repl'
          | 'stream'
          | 'string_decoder'
          | 'timers'
          | 'tls'
          | 'tty'
          | 'url'
          | 'util'
          | 'vm'
          | 'zlib'
        )[];
        ignoreDirectDependencies?: boolean;
        ignoreIndirectDependencies?: boolean;
      },
    ];

export type NoHideCoreModules = 'off' | NoHideCoreModules0;

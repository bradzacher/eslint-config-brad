declare module 'eslint-find-rules' {
    type fn = (
        path : string,
    ) => {
        getAllAvailableRules : () => Array<string>
    }

    const ret : fn
    export = ret
}

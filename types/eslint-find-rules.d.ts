declare module 'eslint-find-rules' {
    type fn = (
        path : string,
    ) => {
        getAllAvailableRules : () => string[]
    }

    const ret : fn
    export = ret
}

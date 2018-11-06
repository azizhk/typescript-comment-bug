const identity = (a) => a;
export const a = {
    ...identity({
        b: 1
    })
};
export const b = {
    ...
    /*#__PURE__*/ identity({
        b: 1
    })
};
export const c = {
    ...
    /*#__PURE__*/
    identity({
        b: 1
    })
};
export const d = {
    ...identity({
        b: 1
    })
};

export default function Hooker() {}

const wrap = (fn, wrapper) => function(...args) {
    return wrapper.call(this, fn.bind(this), ...args);
};

Hooker.hook = function(fnName, wrapperFn) {
    const proto = this.prototype;
    proto[fnName] = wrap(proto[fnName], wrapperFn);
};

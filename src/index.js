module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(config => config.join('')).join('');

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        const pos = bracketsConfig.indexOf(c) !== bracketsConfig.lastIndexOf(c) && stack.includes(c)
            ? bracketsConfig.lastIndexOf(c)
            : bracketsConfig.indexOf(c);

        if (pos === -1) {
            continue;
        }

        if (pos % 2 === 0) {
            stack.push(bracketsConfig[pos + 1]);
        } else if (stack.length === 0 || c !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};

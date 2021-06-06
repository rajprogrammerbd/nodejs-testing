const { joinerFunction } = require("./src/strings");
const { concatingArrays } = require("./src/arrays");
const helper = require("./src/helper/index");


class Strings {
    static joiner(s1, s2) {
        if ( typeof s1 === "string" && typeof s2 === "string" ) {
            return joinerFunction(s1, s2);
        } else throw new Error("Parameters should be typeof string");
    }
}

class Numbers {
    static even(n) {
        if ( typeof n === "number") {
            if ( n >= 0 ) {
                let ans = [];

                if ( n !== 0 ) {
                    for ( let i = 0; i <= n; i++ ) {
                        if ( Number.isInteger(i / 2) ) {
                            ans.push(i);
                        }
                    }
                }
                return ans;
            } else throw new Error("Params should be positive number");
        } else throw new Error("Params should be number");
    }

    static odd(n) {
        if ( typeof n === "number") {
            if ( n >= 0 ) {
                let ans = [];

                if ( n !== 0 ) {
                    for ( let i = 0; i <= n; i++ ) {
                        if ( !Number.isInteger(i / 2) ) {
                            ans.push(i);
                        }
                    }
                }
                return ans;
            } else throw new Error("Params should be positive number");
        } else throw new Error("Params should be number");
    }
}

class Arrays {
    static jointArrays(a1, a2) {
        if ( Array.isArray(a1) && Array.isArray(a2) ) {
            return concatingArrays(a1, a2);
        } else throw new Error("Parameter should be typeof Array");
    }
}

class Random {
    static imageArray() {
        return new Promise(async (resolve, reject) => {
            await helper.gettingImage().then(obj => resolve(obj)).catch(err => reject(err));
        });
    }
}

module.exports.Strings = Strings;
module.exports.Arrays = Arrays;
module.exports.Numbers = Numbers;
module.exports.Randoms = Random;
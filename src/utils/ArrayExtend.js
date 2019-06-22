/**
 * Detect whether the array contains all the targets and support multiple parameters
 * 检测数组中是否包含全部目标,支持多参数
 * @param arr
 * @param target
 * @returns {boolean}
 */
export const contain = (arr, ...target) => {
    const array = target.map(val => arr.includes(val));
    return array.filter(value => value).length === target.length;
};
export const _initArray = (length = 0, normal = '') => {
    return Array.from({length}).fill(normal);
};

/**
 * 判断两个数值是否相等，结果不考虑两层及以上
 * @param value 目标值
 * @param oldValue 比较值
 * @returns {boolean}
 * @private
 */
export const _isEqual = (value, oldValue) => {
    if (value === oldValue) {
        return true;
    }
    if ((typeof value) === 'object' && (typeof oldValue) === 'object') {
        if (Object.keys(value).length !== Object.keys(oldValue).length) {
            return false;
        }
        for (let [key] of Object.entries(value)) {
            if (Array.isArray(value[key])) {
                if (!Array.isArray(oldValue[key]) || value[key].toString() !== oldValue[key].toString()) {
                    return false;
                }
            } else if (oldValue[key] !== value[key]) {
                return false;
            }
        }
        return true;
    }
};

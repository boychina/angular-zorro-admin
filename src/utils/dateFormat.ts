/**
 * 时间对象格式化方法
 * @param {[type]} fmt [description]
 */
var dateFormat = function(date, str) {
    str = str.toLowerCase();
    var time = new Date(date);
    if (/yyyy/.test(str)) {
        str = str.replace(/yyyy/, time.getFullYear());
    }
    if (/mm/.test(str)) {
        str = str.replace(/mm/, time.getMonth() + 1);
    }
    if (/dd/.test(str)) {
        str = str.replace(/dd/, time.getDate());
    }
    if (/hh/.test(str)) {
        str = str.replace(/hh/, function() {
            return time.getHours() >= 10 ? time.getHours() : ("0" + time.getHours());
        });
    }
    if (/ii/.test(str)) {
        str = str.replace(/ii/, function() {
            return time.getMinutes() >= 10 ? time.getMinutes() : ("0" + time.getMinutes());
        });
    }
    if (/ss/.test(str)) {
        str = str.replace(/ss/, function() {
            return time.getSeconds() >= 10 ? time.getSeconds() : ("0" + time.getSeconds());
        });
    }
    if (/week/.test(str)) {
        if (time.getDay() == 0) {
            str = str.replace(/week/, '星期日');
        }
        if (time.getDay() == 1) {
            str = str.replace(/week/, '星期一');
        }
        if (time.getDay() == 2) {
            str = str.replace(/week/, '星期二');
        }
        if (time.getDay() == 3) {
            str = str.replace(/week/, '星期三');
        }
        if (time.getDay() == 4) {
            str = str.replace(/week/, '星期四');
        }
        if (time.getDay() == 5) {
            str = str.replace(/week/, '星期五');
        }
        if (time.getDay() == 6) {
            str = str.replace(/week/, '星期六');
        }
    }
    return str;
}

export { dateFormat };
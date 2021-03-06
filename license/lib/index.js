"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMCode = exports.check = exports.generate = void 0;
var bindings = require('bindings')('license');
global.crypto = require('crypto');
function generate(pw, mcode) {
    return bindings.generate(pw, mcode);
}
exports.generate = generate;
function check(pw) {
    return bindings.check(pw);
}
exports.check = check;
function getMCode() {
    return bindings.getMCode();
}
exports.getMCode = getMCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWxDLFNBQWdCLFFBQVEsQ0FBQyxFQUFVLEVBQUUsS0FBYTtJQUNqRCxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLEtBQUssQ0FBQyxFQUFVO0lBQy9CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRkQsc0JBRUM7QUFDRCxTQUFnQixRQUFRO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLENBQUM7QUFGRCw0QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xyXG52YXIgYmluZGluZ3MgPSByZXF1aXJlKCdiaW5kaW5ncycpKCdsaWNlbnNlJyk7XHJcbmdsb2JhbC5jcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZShwdzogc3RyaW5nLCBtY29kZTogc3RyaW5nKSB7XHJcblx0cmV0dXJuIGJpbmRpbmdzLmdlbmVyYXRlKHB3LCBtY29kZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVjayhwdzogc3RyaW5nKSB7XHJcblx0cmV0dXJuIGJpbmRpbmdzLmNoZWNrKHB3KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TUNvZGUoKSB7XHJcblx0cmV0dXJuIGJpbmRpbmdzLmdldE1Db2RlKCk7XHJcbn1cclxuIl19
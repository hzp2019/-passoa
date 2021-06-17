"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var bindings = require('bindings')('dobot');
var Dobot = /** @class */ (function (_super) {
    __extends(Dobot, _super);
    function Dobot(com) {
        var _this = _super.call(this, { objectMode: true }) || this;
        _this.inst = null;
        _this.inst = bindings.open(com, function (data) {
            _this.push(data);
        });
        return _this;
    }
    Dobot.prototype._read = function (size) {
        if (this.inst) {
            bindings.read(this.inst);
        }
        else {
            this.push(null);
        }
    };
    Dobot.prototype._destroy = function () {
        bindings.close(this.inst);
        this.inst = null;
    };
    Dobot.prototype._final = function () { };
    Dobot.prototype.zero = function () {
        return bindings.zero(this.inst);
    };
    Dobot.prototype.setPTP = function (chunk) {
        return bindings.setPTP(this.inst, chunk);
    };
    Dobot.prototype.isOpened = function () {
        return this.inst ? true : false;
    };
    return Dobot;
}(stream_1.Duplex));
exports.Dobot = Dobot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBRWhDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQWE1QztJQUEyQix5QkFBTTtJQUVoQyxlQUFZLEdBQVc7UUFBdkIsWUFDQyxrQkFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUkzQjtRQU5PLFVBQUksR0FBUSxJQUFJLENBQUM7UUFHeEIsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLElBQVM7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQ0QscUJBQUssR0FBTCxVQUFNLElBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDO0lBQ0Qsd0JBQVEsR0FBUjtRQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxzQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUNYLG9CQUFJLEdBQUo7UUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxzQkFBTSxHQUFOLFVBQU8sS0FBYztRQUNwQixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsd0JBQVEsR0FBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDLEFBN0JELENBQTJCLGVBQU0sR0E2QmhDO0FBN0JZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbnZhciBiaW5kaW5ncyA9IHJlcXVpcmUoJ2JpbmRpbmdzJykoJ2RvYm90Jyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBUUEluZm8ge1xyXG5cdHB0cE1vZGU6IG51bWJlcjtcclxuXHR4OiBudW1iZXI7XHJcblx0eTogbnVtYmVyO1xyXG5cdHo6IG51bWJlcjtcclxuXHRyOiBudW1iZXI7XHJcblx0YWNjZWxlcmF0aW9uUmF0aW86IG51bWJlcjtcclxuXHR2ZWxvY2l0eVJhdGlvOiBudW1iZXI7XHJcblx0anVtcEhlaWdodDogbnVtYmVyO1xyXG5cdHpMaW1pdDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEb2JvdCBleHRlbmRzIER1cGxleCB7XHJcblx0cHJpdmF0ZSBpbnN0OiBhbnkgPSBudWxsO1xyXG5cdGNvbnN0cnVjdG9yKGNvbTogc3RyaW5nKSB7XHJcblx0XHRzdXBlcih7IG9iamVjdE1vZGU6IHRydWUgfSk7XHJcblx0XHR0aGlzLmluc3QgPSBiaW5kaW5ncy5vcGVuKGNvbSwgKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLnB1c2goZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3JlYWQoc2l6ZTogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5pbnN0KSB7XHJcblx0XHRcdGJpbmRpbmdzLnJlYWQodGhpcy5pbnN0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHVzaChudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0X2Rlc3Ryb3koKSB7XHJcblx0XHRiaW5kaW5ncy5jbG9zZSh0aGlzLmluc3QpO1xyXG5cdFx0dGhpcy5pbnN0ID0gbnVsbDtcclxuXHR9XHJcblx0X2ZpbmFsKCkge31cclxuXHR6ZXJvKCl7XHJcblx0XHRyZXR1cm4gYmluZGluZ3MuemVybyh0aGlzLmluc3QpO1xyXG5cdH1cclxuXHRzZXRQVFAoY2h1bms6IFBUUEluZm8pIHtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5zZXRQVFAodGhpcy5pbnN0LCBjaHVuayk7XHJcblx0fVxyXG5cdGlzT3BlbmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdCA/IHRydWUgOiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIl19
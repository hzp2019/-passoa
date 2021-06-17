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
var bindings = require('bindings')('pcan');
var Pcan = /** @class */ (function (_super) {
    __extends(Pcan, _super);
    function Pcan(info) {
        var _this = _super.call(this, { objectMode: true }) || this;
        _this.inst = null;
        _this.wakeup = true;
        _this.inst = bindings.open(info, function (data) {
            _this.wakeup = false;
            _this.push(data);
        });
        _this.timer = setInterval(function () {
            if (_this.wakeup) {
                // console.log("wakeup reader !!!!");
                if (_this.inst)
                    bindings.read(_this.inst);
                else
                    clearInterval(_this.timer);
            }
            else {
                _this.wakeup = true;
            }
        }, 1000);
        return _this;
    }
    Pcan.prototype._read = function (size) {
        if (this.inst) {
            bindings.read(this.inst);
        }
        else {
            this.push(null);
        }
    };
    Pcan.prototype._destroy = function () {
        bindings.close(this.inst);
        this.inst = null;
        if (this.timer)
            clearInterval(this.timer);
    };
    Pcan.prototype._final = function () { };
    Pcan.prototype._write = function (chunk, encoding, next) {
        bindings.write(this.inst, chunk);
        next();
    };
    Pcan.prototype.isOpened = function () {
        if(!this.inst && this.timer){
            clearInterval(this.timer);
        }
        return this.inst ? true : false;
    };
    return Pcan;
}(stream_1.Duplex));
exports.Pcan = Pcan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBRWhDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQWMzQztJQUEwQix3QkFBTTtJQUkvQixjQUFZLElBQWM7UUFBMUIsWUFDQyxrQkFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQWMzQjtRQWxCTyxVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFJL0IsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFDLElBQVM7WUFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3hCLElBQUcsS0FBSSxDQUFDLE1BQU0sRUFBQztnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xDLHdCQUF3QjtnQkFDeEIsSUFBSSxLQUFJLENBQUMsSUFBSTtvQkFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztpQkFBSTtnQkFDSixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNuQjtRQUNGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDVixDQUFDO0lBQ0Qsb0JBQUssR0FBTCxVQUFNLElBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUcsSUFBSSxDQUFDLEtBQUs7WUFBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxxQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUNYLHFCQUFNLEdBQU4sVUFBTyxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxJQUFnQjtRQUNwRCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUM7SUFDUixDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQUFDLEFBdkNELENBQTBCLGVBQU0sR0F1Qy9CO0FBdkNZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbnZhciBiaW5kaW5ncyA9IHJlcXVpcmUoJ2JpbmRpbmdzJykoJ3BjYW4nKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGNhbkluZm8ge1xyXG5cdGJhdWRyYXRlOiBudW1iZXI7XHJcblx0aGFyZHdhcmVfdHlwZTogbnVtYmVyO1xyXG5cdGlvX3BvcnQ6IG51bWJlcjtcclxuXHRpbnRlcnJ1cHQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBDQU5Nc2cge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0dHlwZT86IG51bWJlcjtcclxuXHRkYXRhOiBCdWZmZXI7XHJcblx0ZGxjPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQY2FuIGV4dGVuZHMgRHVwbGV4IHtcclxuXHRwcml2YXRlIGluc3Q6IGFueSA9IG51bGw7XHJcblx0cHJpdmF0ZSB3YWtldXAgOiBib29sZWFuID0gdHJ1ZTtcclxuXHRwcml2YXRlIHRpbWVyIDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKGluZm86IFBjYW5JbmZvKSB7XHJcblx0XHRzdXBlcih7IG9iamVjdE1vZGU6IHRydWUgfSk7XHJcblx0XHR0aGlzLmluc3QgPSBiaW5kaW5ncy5vcGVuKGluZm8sIChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0dGhpcy53YWtldXAgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wdXNoKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRpZih0aGlzLndha2V1cCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ3YWtldXAgcmVhZGVyICEhISFcIik7XHJcblx0XHRcdFx0Ly8gdGhpcy5wdXNoKHtpZDo5OTk5fSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaW5zdCkgYmluZGluZ3MucmVhZCh0aGlzLmluc3QpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLndha2V1cCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0sIDEwMDApO1xyXG5cdH1cclxuXHRfcmVhZChzaXplOiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmluc3QpIHtcclxuXHRcdFx0YmluZGluZ3MucmVhZCh0aGlzLmluc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wdXNoKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfZGVzdHJveSgpIHtcclxuXHRcdGJpbmRpbmdzLmNsb3NlKHRoaXMuaW5zdCk7XHJcblx0XHRpZih0aGlzLnRpbWVyKWNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcblx0fVxyXG5cdF9maW5hbCgpIHt9XHJcblx0X3dyaXRlKGNodW5rOiBhbnksIGVuY29kaW5nOiBzdHJpbmcsIG5leHQ6ICgpID0+IHZvaWQpIHtcclxuXHRcdGJpbmRpbmdzLndyaXRlKHRoaXMuaW5zdCwgY2h1bmspO1xyXG5cdFx0bmV4dCgpO1xyXG5cdH1cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3QgPyB0cnVlIDogZmFsc2U7XHJcblx0fVxyXG59XHJcbiJdfQ==
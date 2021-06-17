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
var bindings_1 = require("./bindings");
var stream_1 = require("stream");
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    // _write(chunk: any, encoding: string, callback: (error?: Error | null) => void) {
    // 	callback();
    // }
    function Camera(idx) {
        var _this = _super.call(this, { objectMode: true }) || this;
        _this.inst = bindings_1.bindings.cameraOpen(idx, function (data) {
            if (_this.isPaused())
                _this.emit('takephoto', data);
            else {
                _this.push(data);
            }
        });
        return _this;
    }
    Camera.prototype._read = function (size) {
        if (bindings_1.bindings.cameraIsOpened(this.inst)) {
            bindings_1.bindings.cameraRead(this.inst);
        }
        else {
            this.push(null);
        }
    };
    Camera.prototype._destroy = function () {
        bindings_1.bindings.cameraClose(this.inst);
    };
    Camera.prototype._final = function () { };
    Camera.prototype.get = function (prop_idx) {
        return bindings_1.bindings.get(prop_idx);
    };
    Camera.prototype.set = function (prop_idx, value) {
        return bindings_1.bindings.set(prop_idx, value);
    };
    Camera.prototype.take = function (path) {
        return bindings_1.bindings.cameraTake(this.inst, path);
    };
    /*
    CV_FOURCC('P', 'I', 'M', '1') = MPEG - 1 codec
    CV_FOURCC('M', 'J', 'P', 'G') = motion - jpeg codec
    CV_FOURCC('M', 'P', '4', '2') = MPEG - 4.2 codec
    CV_FOURCC('D', 'I', 'V', '3') = MPEG - 4.3 codec
    CV_FOURCC('D', 'I', 'V', 'X') = MPEG - 4 codec
    CV_FOURCC('U', '2', '6', '3') = H263 codec
    CV_FOURCC('I', '2', '6', '3') = H263I codec
    CV_FOURCC('F', 'L', 'V', '1') = FLV1 codec
    */
    Camera.prototype.startRecord = function (path) {
        return bindings_1.bindings.cameraRecord(this.inst, path);
    };
    Camera.prototype.stopRecord = function () {
        return bindings_1.bindings.cameraRecord(this.inst);
    };
    Camera.count = function () {
        return bindings_1.bindings.cameraCount();
    };
    Camera.prototype.isOpened = function () {
        return bindings_1.bindings.cameraIsOpened(this.inst);
    };
    Camera.prototype.testLog = function (log) {
        return bindings_1.bindings.cameraTestLog(this.inst, log);
    };
    return Camera;
}(stream_1.Readable));
exports.Camera = Camera;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMsaUNBQWtDO0FBRWxDO0lBQTRCLDBCQUFRO0lBRW5DLG1GQUFtRjtJQUNuRixlQUFlO0lBQ2YsSUFBSTtJQUNKLGdCQUFZLEdBQVc7UUFBdkIsWUFDQyxrQkFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQU8zQjtRQU5BLEtBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQUMsSUFBUztZQUM5QyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzdDO2dCQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7UUFDRixDQUFDLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQ0Qsc0JBQUssR0FBTCxVQUFNLElBQVk7UUFDakIsSUFBSSxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELHVCQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1gsb0JBQUcsR0FBSCxVQUFJLFFBQWdCO1FBQ25CLE9BQU8sbUJBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELG9CQUFHLEdBQUgsVUFBSSxRQUFnQixFQUFFLEtBQWE7UUFDbEMsT0FBTyxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELHFCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2hCLE9BQU8sbUJBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Q7Ozs7Ozs7OztNQVNFO0lBQ0YsNEJBQVcsR0FBWCxVQUFZLElBQVk7UUFDdkIsT0FBTyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCwyQkFBVSxHQUFWO1FBQ0MsT0FBTyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNNLFlBQUssR0FBWjtRQUNDLE9BQU8sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QseUJBQVEsR0FBUjtRQUNDLE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCx3QkFBTyxHQUFQLFVBQVEsR0FBVztRQUNsQixPQUFPLG1CQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDLEFBM0RELENBQTRCLGlCQUFRLEdBMkRuQztBQTNEWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRpbmdzIH0gZnJvbSAnLi9iaW5kaW5ncyc7XHJcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBSZWFkYWJsZSB7XHJcblx0cHJpdmF0ZSBpbnN0OiBhbnk7XHJcblx0Ly8gX3dyaXRlKGNodW5rOiBhbnksIGVuY29kaW5nOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyb3I/OiBFcnJvciB8IG51bGwpID0+IHZvaWQpIHtcclxuXHQvLyBcdGNhbGxiYWNrKCk7XHJcblx0Ly8gfVxyXG5cdGNvbnN0cnVjdG9yKGlkeDogbnVtYmVyKSB7XHJcblx0XHRzdXBlcih7IG9iamVjdE1vZGU6IHRydWUgfSk7XHJcblx0XHR0aGlzLmluc3QgPSBiaW5kaW5ncy5jYW1lcmFPcGVuKGlkeCwgKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5pc1BhdXNlZCgpKSB0aGlzLmVtaXQoJ3Rha2VwaG90bycsIGRhdGEpO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnB1c2goZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVhZChzaXplOiBudW1iZXIpIHtcclxuXHRcdGlmIChiaW5kaW5ncy5jYW1lcmFJc09wZW5lZCh0aGlzLmluc3QpKSB7XHJcblx0XHRcdGJpbmRpbmdzLmNhbWVyYVJlYWQodGhpcy5pbnN0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHVzaChudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0X2Rlc3Ryb3koKSB7XHJcblx0XHRiaW5kaW5ncy5jYW1lcmFDbG9zZSh0aGlzLmluc3QpO1xyXG5cdH1cclxuXHRfZmluYWwoKSB7fVxyXG5cdGdldChwcm9wX2lkeDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gYmluZGluZ3MuZ2V0KHByb3BfaWR4KTtcclxuXHR9XHJcblx0c2V0KHByb3BfaWR4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5zZXQocHJvcF9pZHgsIHZhbHVlKTtcclxuXHR9XHJcblx0dGFrZShwYXRoOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5jYW1lcmFUYWtlKHRoaXMuaW5zdCwgcGF0aCk7XHJcblx0fVxyXG5cdC8qXHJcblx0Q1ZfRk9VUkNDKCdQJywgJ0knLCAnTScsICcxJykgPSBNUEVHIC0gMSBjb2RlY1xyXG5cdENWX0ZPVVJDQygnTScsICdKJywgJ1AnLCAnRycpID0gbW90aW9uIC0ganBlZyBjb2RlY1xyXG5cdENWX0ZPVVJDQygnTScsICdQJywgJzQnLCAnMicpID0gTVBFRyAtIDQuMiBjb2RlY8KgXHJcblx0Q1ZfRk9VUkNDKCdEJywgJ0knLCAnVicsICczJykgPSBNUEVHIC0gNC4zIGNvZGVjwqBcclxuXHRDVl9GT1VSQ0MoJ0QnLCAnSScsICdWJywgJ1gnKSA9IE1QRUcgLSA0IGNvZGVjwqBcclxuXHRDVl9GT1VSQ0MoJ1UnLCAnMicsICc2JywgJzMnKSA9IEgyNjMgY29kZWPCoFxyXG5cdENWX0ZPVVJDQygnSScsICcyJywgJzYnLCAnMycpID0gSDI2M0kgY29kZWPCoFxyXG5cdENWX0ZPVVJDQygnRicsICdMJywgJ1YnLCAnMScpID0gRkxWMSBjb2RlY1xyXG5cdCovXHJcblx0c3RhcnRSZWNvcmQocGF0aDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gYmluZGluZ3MuY2FtZXJhUmVjb3JkKHRoaXMuaW5zdCwgcGF0aCk7XHJcblx0fVxyXG5cdHN0b3BSZWNvcmQoKSB7XHJcblx0XHRyZXR1cm4gYmluZGluZ3MuY2FtZXJhUmVjb3JkKHRoaXMuaW5zdCk7XHJcblx0fVxyXG5cdHN0YXRpYyBjb3VudCgpIHtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5jYW1lcmFDb3VudCgpO1xyXG5cdH1cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5jYW1lcmFJc09wZW5lZCh0aGlzLmluc3QpO1xyXG5cdH1cclxuXHR0ZXN0TG9nKGxvZzogc3RyaW5nKXtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5jYW1lcmFUZXN0TG9nKHRoaXMuaW5zdCwgbG9nKTtcclxuXHR9XHJcbn1cclxuIl19
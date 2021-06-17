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
var bindings = require('bindings')('card');
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inst = null;
        return _this;
    }
    Card.prototype.openCard = function () {
        this.inst = bindings.openCard(function (data) { });
    };
    Card.prototype.closeCard = function () {
        bindings.closeCard(this.inst);
        this.inst = null;
    };
    Card.prototype.setCardDASingalOut = function (info) {
        return bindings.setCardDA(this.inst, info);
    };
    Card.prototype.getCardADSingalOut = function (info) {
        return bindings.getCardAD(this.inst, info);
    };
    Card.prototype.getCardADContinu = function (info) {
        return bindings.getADContinu(this.inst, info);
    };
    Card.prototype.isOpened = function () {
        return this.inst ? true : false;
    };
    return Card;
}(stream_1.Duplex));
exports.Card = Card;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBRWhDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQWEzQztJQUEwQix3QkFBTTtJQUFoQztRQUFBLHFFQXFCQztRQXBCUSxVQUFJLEdBQVEsSUFBSSxDQUFDOztJQW9CMUIsQ0FBQztJQW5CQSx1QkFBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQUMsSUFBUyxJQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCx3QkFBUyxHQUFUO1FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNELGlDQUFrQixHQUFsQixVQUFtQixJQUFZO1FBQzlCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxpQ0FBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUM5QixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsK0JBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDNUIsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRixXQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUEwQixlQUFNLEdBcUIvQjtBQXJCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER1cGxleCB9IGZyb20gJ3N0cmVhbSc7XHJcblxyXG52YXIgYmluZGluZ3MgPSByZXF1aXJlKCdiaW5kaW5ncycpKCdjYXJkJyk7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZERBIHtcclxuXHRjaGFuZWw6IG51bWJlcjtcclxuXHR2YWx1ZTogbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBDYXJkQUQge1xyXG5cdG1vZGVsOiBudW1iZXI7XHJcblx0Y2hhbmVsOiBudW1iZXI7XHJcblx0Z2FpbjogbnVtYmVyO1xyXG5cdG51bT86IG51bWJlcjtcclxuXHRyYXRlPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXJkIGV4dGVuZHMgRHVwbGV4IHtcclxuXHRwcml2YXRlIGluc3Q6IGFueSA9IG51bGw7XHJcblx0b3BlbkNhcmQoKXtcclxuXHRcdHRoaXMuaW5zdCA9IGJpbmRpbmdzLm9wZW5DYXJkKChkYXRhOiBhbnkpID0+IHt9KTtcclxuXHR9XHJcblx0Y2xvc2VDYXJkKCl7XHJcblx0XHRiaW5kaW5ncy5jbG9zZUNhcmQodGhpcy5pbnN0KTtcclxuXHRcdHRoaXMuaW5zdCA9IG51bGw7XHJcblx0fVxyXG5cdHNldENhcmREQVNpbmdhbE91dChpbmZvOiBDYXJkREEpe1xyXG5cdFx0cmV0dXJuIGJpbmRpbmdzLnNldENhcmREQSh0aGlzLmluc3QsaW5mbyk7XHJcblx0fVxyXG5cdGdldENhcmRBRFNpbmdhbE91dChpbmZvOiBDYXJkQUQpe1xyXG5cdFx0cmV0dXJuIGJpbmRpbmdzLmdldENhcmRBRCh0aGlzLmluc3QsaW5mbyk7XHJcblx0fVxyXG5cdGdldENhcmRBRENvbnRpbnUoaW5mbzogQ2FyZEFEKXtcclxuXHRcdHJldHVybiBiaW5kaW5ncy5nZXRBRENvbnRpbnUodGhpcy5pbnN0LGluZm8pO1xyXG5cdH1cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3QgPyB0cnVlIDogZmFsc2U7XHJcblx0fVxyXG59XHJcbiJdfQ==
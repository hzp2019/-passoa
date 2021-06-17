"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var bson_1 = require("bson");
var ImageRemote = /** @class */ (function () {
    function ImageRemote() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], ImageRemote.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ImageRemote.prototype, "auto_step_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ImageRemote.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], ImageRemote.prototype, "update_date", void 0);
    ImageRemote = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], ImageRemote);
    return ImageRemote;
}());
exports.ImageRemote = ImageRemote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfcmVtb3RlLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvaW1hZ2VfcmVtb3RlLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUF3RDtBQUN4RCw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7OzJDQUFZO0lBQ2xCO1FBQVQsZ0JBQU0sRUFBRTs7cURBQXNCO0lBQ3JCO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFDWjtRQUFULGdCQUFNLEVBQUU7a0NBQWMsSUFBSTtvREFBQztJQVBoQixXQUFXO1FBRHZCLGdCQUFNLEVBQUU7O09BQ0ksV0FBVyxDQVF2QjtJQUFELGtCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVJlbW90ZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cdEBDb2x1bW4oKSBhdXRvX3N0ZXBfaWQ6IHN0cmluZztcclxuXHRAQ29sdW1uKCkgdWlkOiBzdHJpbmc7XHJcblx0QENvbHVtbigpIHVwZGF0ZV9kYXRlOiBEYXRlO1xyXG59XHJcbiJdfQ==
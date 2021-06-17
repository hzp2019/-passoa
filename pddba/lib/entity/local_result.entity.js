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
var LocalResult = /** @class */ (function () {
    function LocalResult() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "chid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "queueName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LocalResult.prototype, "case_module", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], LocalResult.prototype, "result", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { nullable: true }),
        __metadata("design:type", Object)
    ], LocalResult.prototype, "detail_result", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], LocalResult.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.Column('simple-json'),
        __metadata("design:type", Object)
    ], LocalResult.prototype, "case_info", void 0);
    __decorate([
        typeorm_1.Column('simple-json'),
        __metadata("design:type", Object)
    ], LocalResult.prototype, "steps_info", void 0);
    LocalResult = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], LocalResult);
    return LocalResult;
}());
exports.LocalResult = LocalResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxfcmVzdWx0LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvbG9jYWxfcmVzdWx0LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUEwRTtBQUMxRSw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7OzJDQUFZO0lBRWxCO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7OzRDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzs2Q0FBYztJQUViO1FBQVQsZ0JBQU0sRUFBRTs7NkNBQWM7SUFFYjtRQUFULGdCQUFNLEVBQUU7O2tEQUFtQjtJQUVsQjtRQUFULGdCQUFNLEVBQUU7O29EQUFxQjtJQUVwQjtRQUFULGdCQUFNLEVBQUU7OytDQUFnQjtJQUd6QjtRQURDLGdCQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztzREFDdkI7SUFFQztRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJO29EQUFDO0lBRWY7UUFBdEIsZ0JBQU0sQ0FBQyxhQUFhLENBQUM7O2tEQUFnQjtJQUNmO1FBQXRCLGdCQUFNLENBQUMsYUFBYSxDQUFDOzttREFBaUI7SUExQjNCLFdBQVc7UUFEdkIsZ0JBQU0sRUFBRTs7T0FDSSxXQUFXLENBMkJ2QjtJQUFELGtCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUNvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFJlc3VsdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgcGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSB2aWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHR5cGU6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIGNoaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHF1ZXVlTmFtZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgY2FzZV9tb2R1bGU6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHJlc3VsdDogbnVtYmVyO1xyXG5cclxuXHRAQ29sdW1uKCdzaW1wbGUtanNvbicsIHsgbnVsbGFibGU6IHRydWUgfSlcclxuXHRkZXRhaWxfcmVzdWx0OiBhbnk7XHJcblxyXG5cdEBDcmVhdGVEYXRlQ29sdW1uKCkgY3JlYXRlX2RhdGU6IERhdGU7XHJcblxyXG5cdEBDb2x1bW4oJ3NpbXBsZS1qc29uJykgY2FzZV9pbmZvOiBhbnk7XHJcblx0QENvbHVtbignc2ltcGxlLWpzb24nKSBzdGVwc19pbmZvOiBhbnk7XHJcbn1cclxuIl19
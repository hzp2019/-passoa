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
var User = /** @class */ (function () {
    function User() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "create_date", void 0);
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Index(['name'], { unique: true }),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvZW50aXR5L3VzZXIuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlGO0FBQ2pGLDZCQUFnQztBQUloQztJQUNDO1FBQ0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDZ0I7UUFBaEIsdUJBQWEsRUFBRTs7b0NBQVk7SUFDSjtRQUF2QixnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOzswQ0FBaUI7SUFFaEI7UUFBeEIsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MENBQWtCO0lBRWhDO1FBQVQsZ0JBQU0sRUFBRTs7c0NBQWM7SUFFYjtRQUFULGdCQUFNLEVBQUU7O3VDQUFlO0lBRUo7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTs2Q0FBQztJQWIxQixJQUFJO1FBRmhCLGdCQUFNLEVBQUU7UUFDUixlQUFLLENBQUMsQ0FBRSxNQUFNLENBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7T0FDdkIsSUFBSSxDQWNoQjtJQUFELFdBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBJbmRleCB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbkBJbmRleChbICduYW1lJyBdLCB7IHVuaXF1ZTogdHJ1ZSB9KVxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KXVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KSBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgbmFtZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgZW1haWw6IHN0cmluZztcclxuXHJcblx0QENyZWF0ZURhdGVDb2x1bW4oKSBjcmVhdGVfZGF0ZTogRGF0ZTtcclxufVxyXG4iXX0=
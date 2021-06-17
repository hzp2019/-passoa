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
var AutoStep = /** @class */ (function () {
    function AutoStep() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], AutoStep.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoStep.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoStep.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoStep.prototype, "parent_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoStep.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], AutoStep.prototype, "fixed_id", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { default: '' }),
        __metadata("design:type", Object)
    ], AutoStep.prototype, "content", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AutoStep.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], AutoStep.prototype, "update_date", void 0);
    AutoStep = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Index(['pid', 'parent_id', 'name'], { unique: true }),
        __metadata("design:paramtypes", [])
    ], AutoStep);
    return AutoStep;
}());
exports.AutoStep = AutoStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b19zdGVwLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvYXV0b19zdGVwLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQVFpQjtBQUNqQiw2QkFBZ0M7QUFJaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7O3dDQUFZO0lBRWxCO1FBQVQsZ0JBQU0sRUFBRTs7eUNBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7O3lDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzsrQ0FBbUI7SUFFbEI7UUFBVCxnQkFBTSxFQUFFOzswQ0FBYztJQUd2QjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7OzhDQUNQO0lBR2pCO1FBREMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7OzZDQUMxQjtJQUVPO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7aURBQUM7SUFFbEI7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTtpREFBQztJQXRCMUIsUUFBUTtRQUZwQixnQkFBTSxFQUFFO1FBQ1IsZUFBSyxDQUFDLENBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7T0FDM0MsUUFBUSxDQXlCcEI7SUFBRCxlQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6QlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbHVtbixcclxuXHRJbmRleCxcclxuXHRFbnRpdHksXHJcblx0UHJpbWFyeUNvbHVtbixcclxuXHRDcmVhdGVEYXRlQ29sdW1uLFxyXG5cdFVwZGF0ZURhdGVDb2x1bW4sXHJcblx0UHJpbWFyeUdlbmVyYXRlZENvbHVtblxyXG59IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbkBJbmRleChbICdwaWQnLCAncGFyZW50X2lkJywgJ25hbWUnIF0sIHsgdW5pcXVlOiB0cnVlIH0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvU3RlcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgcGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSB1aWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHBhcmVudF9pZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgbmFtZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSlcclxuXHRmaXhlZF9pZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCdzaW1wbGUtanNvbicsIHsgZGVmYXVsdDogJycgfSlcclxuXHRjb250ZW50OiBhbnk7XHJcblxyXG5cdEBDcmVhdGVEYXRlQ29sdW1uKCkgY3JlYXRlX2RhdGU6IERhdGU7XHJcblxyXG5cdEBVcGRhdGVEYXRlQ29sdW1uKCkgdXBkYXRlX2RhdGU6IERhdGU7XHJcblxyXG5cdGluZm86IGFueTtcclxufVxyXG4iXX0=
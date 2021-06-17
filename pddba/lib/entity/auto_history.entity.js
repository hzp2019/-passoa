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
var AutoHistory = /** @class */ (function () {
    function AutoHistory() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], AutoHistory.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], AutoHistory.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoHistory.prototype, "chid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoHistory.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AutoHistory.prototype, "run_time", void 0);
    __decorate([
        typeorm_1.Column('simple-json'),
        __metadata("design:type", Object)
    ], AutoHistory.prototype, "steps", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AutoHistory.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], AutoHistory.prototype, "update_date", void 0);
    AutoHistory = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], AutoHistory);
    return AutoHistory;
}());
exports.AutoHistory = AutoHistory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b19oaXN0b3J5LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvYXV0b19oaXN0b3J5LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE0RjtBQUM1Riw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7OzJDQUFZO0lBRUg7UUFBeEIsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7NENBQWE7SUFFM0I7UUFBVCxnQkFBTSxFQUFFOzs2Q0FBYztJQUViO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7O2lEQUFrQjtJQUVKO1FBQXRCLGdCQUFNLENBQUMsYUFBYSxDQUFDOzs4Q0FBWTtJQUVkO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7b0RBQUM7SUFFbEI7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTtvREFBQztJQWxCMUIsV0FBVztRQUR2QixnQkFBTSxFQUFFOztPQUNJLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBVcGRhdGVEYXRlQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIEF1dG9IaXN0b3J5IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KSBwaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIGNoaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHVpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgcnVuX3RpbWU6IG51bWJlcjtcclxuXHJcblx0QENvbHVtbignc2ltcGxlLWpzb24nKSBzdGVwczogYW55O1xyXG5cclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG5cclxuXHRAVXBkYXRlRGF0ZUNvbHVtbigpIHVwZGF0ZV9kYXRlOiBEYXRlO1xyXG5cclxuXHRjYXNlX2luZm86IHN0cmluZztcclxufVxyXG4iXX0=
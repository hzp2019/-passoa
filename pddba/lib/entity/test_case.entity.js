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
var TestCase = /** @class */ (function () {
    function TestCase() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], TestCase.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TestCase.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TestCase.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TestCase.prototype, "chid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TestCase.prototype, "tid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TestCase.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { nullable: true }),
        __metadata("design:type", String)
    ], TestCase.prototype, "data", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], TestCase.prototype, "create_date", void 0);
    TestCase = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], TestCase);
    return TestCase;
}());
exports.TestCase = TestCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9jYXNlLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvdGVzdF9jYXNlLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUEwRTtBQUMxRSw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7O3dDQUFZO0lBRWxCO1FBQVQsZ0JBQU0sRUFBRTs7eUNBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7O3lDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzswQ0FBYztJQUViO1FBQVQsZ0JBQU0sRUFBRTs7eUNBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7O3lDQUFhO0lBR3RCO1FBREMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUM3QjtJQUVPO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7aURBQUM7SUFuQjFCLFFBQVE7UUFEcEIsZ0JBQU0sRUFBRTs7T0FDSSxRQUFRLENBdUJwQjtJQUFELGVBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIFRlc3RDYXNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBwaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHZpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgY2hpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgdGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSB1aWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbignc2ltcGxlLWpzb24nLCB7IG51bGxhYmxlOiB0cnVlIH0pXHJcblx0ZGF0YTogc3RyaW5nO1xyXG5cclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG5cclxuXHRjYXNlX2luZm86IHN0cmluZztcclxuXHRzdGVwX2luZm86IHN0cmluZztcclxufVxyXG4iXX0=
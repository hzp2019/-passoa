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
var CacheResult = /** @class */ (function () {
    function CacheResult() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], CacheResult.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CacheResult.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CacheResult.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CacheResult.prototype, "chid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CacheResult.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column({ default: 'local' }),
        __metadata("design:type", String)
    ], CacheResult.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CacheResult.prototype, "queueName", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { default: '{}' }),
        __metadata("design:type", Object)
    ], CacheResult.prototype, "test_info", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], CacheResult.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], CacheResult.prototype, "update_date", void 0);
    CacheResult = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], CacheResult);
    return CacheResult;
}());
exports.CacheResult = CacheResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVfcmVzdWx0LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvY2FjaGVfcmVzdWx0LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE0RjtBQUM1Riw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7OzJDQUFZO0lBRWxCO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7OzRDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzs2Q0FBYztJQUViO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFFUTtRQUE3QixnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs2Q0FBYztJQUU5QjtRQUFULGdCQUFNLEVBQUU7O2tEQUFtQjtJQUcvQjtRQURJLGdCQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztrREFDN0I7SUFFSztRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJO29EQUFDO0lBRWY7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTtvREFBQztJQXZCN0IsV0FBVztRQUR2QixnQkFBTSxFQUFFOztPQUNJLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBVcGRhdGVEYXRlQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIENhY2hlUmVzdWx0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBwaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHZpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgY2hpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgdWlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnbG9jYWwnIH0pIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKCkgcXVldWVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbignc2ltcGxlLWpzb24nLCB7IGRlZmF1bHQ6ICd7fScgfSlcclxuXHR0ZXN0X2luZm86IGFueTtcclxuXHJcblx0QENyZWF0ZURhdGVDb2x1bW4oKSBjcmVhdGVfZGF0ZTogRGF0ZTtcclxuXHJcbiAgICBAVXBkYXRlRGF0ZUNvbHVtbigpIHVwZGF0ZV9kYXRlOiBEYXRlO1xyXG5cclxuICAgIHByb2plY3RfaW5mbzogYW55O1xyXG4gICAgdmVyc2lvbl9pbmZvOiBhbnk7XHJcbiAgICBjYXNlX2luZm86IGFueTtcclxufVxyXG4iXX0=
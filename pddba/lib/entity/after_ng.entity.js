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
var AfterNg = /** @class */ (function () {
    function AfterNg() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], AfterNg.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AfterNg.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AfterNg.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AfterNg.prototype, "sid", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AfterNg.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], AfterNg.prototype, "update_date", void 0);
    AfterNg = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], AfterNg);
    return AfterNg;
}());
exports.AfterNg = AfterNg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZ0ZXJfbmcuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGRkYmEvc3JjL2VudGl0eS9hZnRlcl9uZy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNEY7QUFDNUYsNkJBQWdDO0FBR2hDO0lBQ0M7UUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNnQjtRQUFoQix1QkFBYSxFQUFFOzt1Q0FBWTtJQUVsQjtRQUFULGdCQUFNLEVBQUU7O3dDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzt3Q0FBYTtJQUVaO1FBQVQsZ0JBQU0sRUFBRTs7d0NBQWE7SUFFRjtRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJO2dEQUFDO0lBRWY7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTtnREFBQztJQWQ3QixPQUFPO1FBRG5CLGdCQUFNLEVBQUU7O09BQ0ksT0FBTyxDQWlCbkI7SUFBRCxjQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUNvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBBZnRlck5nIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBwaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHVpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgc2lkOiBzdHJpbmc7XHJcblxyXG5cdEBDcmVhdGVEYXRlQ29sdW1uKCkgY3JlYXRlX2RhdGU6IERhdGU7XHJcblxyXG4gICAgQFVwZGF0ZURhdGVDb2x1bW4oKSB1cGRhdGVfZGF0ZTogRGF0ZTtcclxuICAgIFxyXG4gICAgaW5mbzogc3RyaW5nO1xyXG59XHJcbiJdfQ==
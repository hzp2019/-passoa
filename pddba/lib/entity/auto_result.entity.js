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
var AutoResult = /** @class */ (function () {
    function AutoResult() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], AutoResult.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoResult.prototype, "chid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoResult.prototype, "case_module", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AutoResult.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], AutoResult.prototype, "start_time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], AutoResult.prototype, "end_time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AutoResult.prototype, "result", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { nullable: true }),
        __metadata("design:type", String)
    ], AutoResult.prototype, "fail_info", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { default: '' }),
        __metadata("design:type", Object)
    ], AutoResult.prototype, "case_info", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { default: '' }),
        __metadata("design:type", Object)
    ], AutoResult.prototype, "step_info", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AutoResult.prototype, "create_date", void 0);
    AutoResult = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], AutoResult);
    return AutoResult;
}());
exports.AutoResult = AutoResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b19yZXN1bHQuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGRkYmEvc3JjL2VudGl0eS9hdXRvX3Jlc3VsdC5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBMEU7QUFDMUUsNkJBQWdDO0FBR2hDO0lBQ0M7UUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNnQjtRQUFoQix1QkFBYSxFQUFFOzswQ0FBWTtJQUVsQjtRQUFULGdCQUFNLEVBQUU7OzRDQUFjO0lBRWI7UUFBVCxnQkFBTSxFQUFFOzttREFBcUI7SUFFcEI7UUFBVCxnQkFBTSxFQUFFOzsyQ0FBYTtJQUVaO1FBQVQsZ0JBQU0sRUFBRTtrQ0FBYSxJQUFJO2tEQUFDO0lBRWpCO1FBQVQsZ0JBQU0sRUFBRTtrQ0FBVyxJQUFJO2dEQUFDO0lBRWY7UUFBVCxnQkFBTSxFQUFFOzs4Q0FBZ0I7SUFHekI7UUFEQyxnQkFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQ3hCO0lBR2xCO1FBREMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O2lEQUN4QjtJQUdmO1FBREMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O2lEQUN4QjtJQUVLO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7bURBQUM7SUEzQjFCLFVBQVU7UUFEdEIsZ0JBQU0sRUFBRTs7T0FDSSxVQUFVLENBNEJ0QjtJQUFELGlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUNvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRvUmVzdWx0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBjaGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBjYXNlX21vZHVsZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgdWlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBzdGFydF90aW1lOiBEYXRlO1xyXG5cclxuXHRAQ29sdW1uKCkgZW5kX3RpbWU6IERhdGU7XHJcblxyXG5cdEBDb2x1bW4oKSByZXN1bHQ6IG51bWJlcjtcclxuXHJcblx0QENvbHVtbignc2ltcGxlLWpzb24nLCB7IG51bGxhYmxlOiB0cnVlIH0pXHJcblx0ZmFpbF9pbmZvOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oJ3NpbXBsZS1qc29uJywgeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2VfaW5mbzogYW55O1xyXG5cclxuXHRAQ29sdW1uKCdzaW1wbGUtanNvbicsIHsgZGVmYXVsdDogJycgfSlcclxuXHRzdGVwX2luZm86IGFueTtcclxuXHJcblx0QENyZWF0ZURhdGVDb2x1bW4oKSBjcmVhdGVfZGF0ZTogRGF0ZTtcclxufVxyXG4iXX0=
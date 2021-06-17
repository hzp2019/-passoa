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
var DBC = /** @class */ (function () {
    function DBC() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], DBC.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DBC.prototype, "filename", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DBC.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DBC.prototype, "uid", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], DBC.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], DBC.prototype, "update_date", void 0);
    DBC = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], DBC);
    return DBC;
}());
exports.DBC = DBC;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJjLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvZGJjLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFtRztBQUNuRyw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7O21DQUFZO0lBQ2xCO1FBQVQsZ0JBQU0sRUFBRTs7eUNBQWtCO0lBRzNCO1FBRkMsZUFBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZCLGdCQUFNLEVBQUU7O29DQUNHO0lBQ0Y7UUFBVCxnQkFBTSxFQUFFOztvQ0FBYTtJQUNGO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7NENBQUM7SUFDbEI7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTs0Q0FBQztJQVgxQixHQUFHO1FBRGYsZ0JBQU0sRUFBRTs7T0FDSSxHQUFHLENBWWY7SUFBRCxVQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUNvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbiwgSW5kZXggfSBmcm9tICd0eXBlb3JtJztcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdic29uJztcclxuXHJcbkBFbnRpdHkoKVxyXG5leHBvcnQgY2xhc3MgREJDIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblx0QENvbHVtbigpIGZpbGVuYW1lOiBzdHJpbmc7XHJcblx0QEluZGV4KHsgdW5pcXVlOiB0cnVlIH0pXHJcblx0QENvbHVtbigpXHJcblx0cGlkOiBzdHJpbmc7XHJcblx0QENvbHVtbigpIHVpZDogc3RyaW5nO1xyXG5cdEBDcmVhdGVEYXRlQ29sdW1uKCkgY3JlYXRlX2RhdGU6IERhdGU7XHJcblx0QFVwZGF0ZURhdGVDb2x1bW4oKSB1cGRhdGVfZGF0ZTogRGF0ZTtcclxufVxyXG4iXX0=
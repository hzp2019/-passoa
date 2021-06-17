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
var Version = /** @class */ (function () {
    function Version() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Version.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "uid", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Version.prototype, "create_date", void 0);
    Version = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Index(['name', 'pid'], { unique: true }),
        __metadata("design:paramtypes", [])
    ], Version);
    return Version;
}());
exports.Version = Version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvZW50aXR5L3ZlcnNpb24uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlGO0FBQ2pGLDZCQUFnQztBQUloQztJQUNDO1FBQ0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDZ0I7UUFBaEIsdUJBQWEsRUFBRTs7dUNBQVk7SUFFbEI7UUFBVCxnQkFBTSxFQUFFOzt5Q0FBYztJQUViO1FBQVQsZ0JBQU0sRUFBRTs7d0NBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7O3dDQUFhO0lBRUY7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTtnREFBQztJQVoxQixPQUFPO1FBRm5CLGdCQUFNLEVBQUU7UUFDUixlQUFLLENBQUMsQ0FBRSxNQUFNLEVBQUUsS0FBSyxDQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O09BQzlCLE9BQU8sQ0FhbkI7SUFBRCxjQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgSW5kZXgsIFByaW1hcnlDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdic29uJztcclxuXHJcbkBFbnRpdHkoKVxyXG5ASW5kZXgoWyAnbmFtZScsICdwaWQnIF0sIHsgdW5pcXVlOiB0cnVlIH0pXHJcbmV4cG9ydCBjbGFzcyBWZXJzaW9uIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBwaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHVpZDogc3RyaW5nO1xyXG5cclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG59XHJcbiJdfQ==
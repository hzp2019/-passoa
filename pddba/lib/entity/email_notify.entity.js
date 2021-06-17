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
var EmailNotify = /** @class */ (function () {
    function EmailNotify() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], EmailNotify.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], EmailNotify.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], EmailNotify.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { default: '[]' }),
        __metadata("design:type", Object)
    ], EmailNotify.prototype, "setting", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], EmailNotify.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], EmailNotify.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], EmailNotify.prototype, "update_date", void 0);
    EmailNotify = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Index(['pid', 'uid'], { unique: true }),
        __metadata("design:paramtypes", [])
    ], EmailNotify);
    return EmailNotify;
}());
exports.EmailNotify = EmailNotify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxfbm90aWZ5LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvZW1haWxfbm90aWZ5LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQU9pQjtBQUNqQiw2QkFBZ0M7QUFJaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7OzJDQUFZO0lBRWY7UUFBVCxnQkFBTSxFQUFFOzs0Q0FBYTtJQUVaO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFFaUI7UUFBekMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dEQUFjO0lBRTVCO1FBQTFCLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUFpQjtJQUV2QjtRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJO29EQUFDO0lBRWY7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTtvREFBQztJQWhCN0IsV0FBVztRQUZ2QixnQkFBTSxFQUFFO1FBQ1IsZUFBSyxDQUFDLENBQUUsS0FBSyxFQUFDLEtBQUssQ0FBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztPQUM1QixXQUFXLENBbUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbHVtbixcclxuXHRJbmRleCxcclxuXHRFbnRpdHksXHJcblx0UHJpbWFyeUNvbHVtbixcclxuXHRDcmVhdGVEYXRlQ29sdW1uLFxyXG5cdFVwZGF0ZURhdGVDb2x1bW4sXHJcbn0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuQEluZGV4KFsgJ3BpZCcsJ3VpZCcgXSwgeyB1bmlxdWU6IHRydWUgfSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsTm90aWZ5IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbigpIHBpZDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBAQ29sdW1uKCkgdWlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oJ3NpbXBsZS1qc29uJywgeyBkZWZhdWx0OiAnW10nIH0pIHNldHRpbmc6IGFueTtcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6IHRydWUgfSkgc3RhdHVzOiBib29sZWFuO1xyXG5cclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG5cclxuICAgIEBVcGRhdGVEYXRlQ29sdW1uKCkgdXBkYXRlX2RhdGU6IERhdGU7XHJcbiAgICBcclxuICAgIGluZm86IGFueTtcclxufVxyXG4iXX0=
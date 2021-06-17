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
var Image = /** @class */ (function () {
    function Image() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Image.prototype, "auto_step_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Image.prototype, "uid", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Image.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Image.prototype, "update_date", void 0);
    Image = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], Image);
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGRkYmEvc3JjL2VudGl0eS9pbWFnZS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUc7QUFDbkcsNkJBQWdDO0FBR2hDO0lBQ0M7UUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNnQjtRQUFoQix1QkFBYSxFQUFFOztxQ0FBWTtJQUNsQjtRQUFULGdCQUFNLEVBQUU7OytDQUFzQjtJQUNyQjtRQUFULGdCQUFNLEVBQUU7O3NDQUFhO0lBQ0Y7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTs4Q0FBQztJQUNsQjtRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJOzhDQUFDO0lBUjFCLEtBQUs7UUFEakIsZ0JBQU0sRUFBRTs7T0FDSSxLQUFLLENBU2pCO0lBQUQsWUFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4sIEluZGV4LCBVcGRhdGVEYXRlQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIEltYWdlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdH1cclxuXHRAUHJpbWFyeUNvbHVtbigpIGlkOiBzdHJpbmc7XHJcblx0QENvbHVtbigpIGF1dG9fc3RlcF9pZDogc3RyaW5nO1xyXG5cdEBDb2x1bW4oKSB1aWQ6IHN0cmluZztcclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG5cdEBVcGRhdGVEYXRlQ29sdW1uKCkgdXBkYXRlX2RhdGU6IERhdGU7XHJcbn1cclxuIl19
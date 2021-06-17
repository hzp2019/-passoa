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
var CaseResult = /** @class */ (function () {
    function CaseResult() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], CaseResult.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseResult.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseResult.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseResult.prototype, "chid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseResult.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseResult.prototype, "case_module", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CaseResult.prototype, "result", void 0);
    __decorate([
        typeorm_1.Column('simple-json', { nullable: true }),
        __metadata("design:type", String)
    ], CaseResult.prototype, "data", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], CaseResult.prototype, "create_date", void 0);
    CaseResult = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], CaseResult);
    return CaseResult;
}());
exports.CaseResult = CaseResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZV9yZXN1bHQuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGRkYmEvc3JjL2VudGl0eS9jYXNlX3Jlc3VsdC5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBMEU7QUFDMUUsNkJBQWdDO0FBR2hDO0lBQ0M7UUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNnQjtRQUFoQix1QkFBYSxFQUFFOzswQ0FBWTtJQUVsQjtRQUFULGdCQUFNLEVBQUU7OzJDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzsyQ0FBYTtJQUVaO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWM7SUFFYjtRQUFULGdCQUFNLEVBQUU7OzJDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzttREFBcUI7SUFFcEI7UUFBVCxnQkFBTSxFQUFFOzs4Q0FBZ0I7SUFHekI7UUFEQyxnQkFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQzdCO0lBRU87UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTttREFBQztJQXJCMUIsVUFBVTtRQUR0QixnQkFBTSxFQUFFOztPQUNJLFVBQVUsQ0F3QnRCO0lBQUQsaUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIENhc2VSZXN1bHQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pZCA9IG5ldyBPYmplY3RJRCgpLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cdEBQcmltYXJ5Q29sdW1uKCkgaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHBpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgdmlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSBjaGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSB1aWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIGNhc2VfbW9kdWxlOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSByZXN1bHQ6IG51bWJlcjtcclxuXHJcblx0QENvbHVtbignc2ltcGxlLWpzb24nLCB7IG51bGxhYmxlOiB0cnVlIH0pXHJcblx0ZGF0YTogc3RyaW5nO1xyXG5cclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG5cclxuXHRjYXNlX2luZm86IHN0cmluZztcclxufVxyXG4iXX0=
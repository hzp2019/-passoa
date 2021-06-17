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
var Project = /** @class */ (function () {
    function Project() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Project.prototype, "email_info", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Project.prototype, "create_date", void 0);
    Project = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], Project);
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvZW50aXR5L3Byb2plY3QuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlGO0FBQ2pGLDZCQUFnQztBQUdoQztJQUNDO1FBQ0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDZ0I7UUFBaEIsdUJBQWEsRUFBRTs7dUNBQVk7SUFHNUI7UUFGQyxlQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDdkIsZ0JBQU0sRUFBRTs7eUNBQ0k7SUFFSDtRQUFULGdCQUFNLEVBQUU7O3dDQUFhO0lBRUc7UUFBeEIsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7K0NBQW9CO0lBRXhCO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7Z0RBQUM7SUFiMUIsT0FBTztRQURuQixnQkFBTSxFQUFFOztPQUNJLE9BQU8sQ0FjbkI7SUFBRCxjQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgSW5kZXgsIFByaW1hcnlDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdic29uJztcclxuXHJcbkBFbnRpdHkoKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cdEBJbmRleCh7IHVuaXF1ZTogdHJ1ZSB9KVxyXG5cdEBDb2x1bW4oKVxyXG5cdG5hbWU6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHVpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSkgZW1haWxfaW5mbzogc3RyaW5nO1xyXG5cclxuXHRAQ3JlYXRlRGF0ZUNvbHVtbigpIGNyZWF0ZV9kYXRlOiBEYXRlO1xyXG59XHJcbiJdfQ==
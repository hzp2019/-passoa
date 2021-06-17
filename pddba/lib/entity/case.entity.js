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
var Case = /** @class */ (function () {
    function Case() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Case.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Case.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Case.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Case.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "dam_num", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "dam_name", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_id", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_name", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Case.prototype, "case_level", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_module", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_pre", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_op", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_exp", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], Case.prototype, "case_note", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Case.prototype, "case_type", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Case.prototype, "case_status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Case.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Case.prototype, "update_date", void 0);
    Case = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Index(['pid', 'case_id'], { unique: true }),
        __metadata("design:paramtypes", [])
    ], Case);
    return Case;
}());
exports.Case = Case;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvZW50aXR5L2Nhc2UuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1HO0FBQ25HLDZCQUFnQztBQUloQztJQUNDO1FBQ0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDZ0I7UUFBaEIsdUJBQWEsRUFBRTs7b0NBQVk7SUFFbEI7UUFBVCxnQkFBTSxFQUFFOztxQ0FBYTtJQUVaO1FBQVQsZ0JBQU0sRUFBRTs7cUNBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7O3FDQUFhO0lBR3RCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7eUNBQ1I7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOzswQ0FDUDtJQUdqQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O3lDQUNSO0lBR2hCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MkNBQ047SUFHbEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzs0Q0FDSjtJQUduQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7OzZDQUNKO0lBR3BCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MENBQ1A7SUFHakI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOzt5Q0FDUjtJQUdoQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7OzBDQUNQO0lBR2pCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MkNBQ047SUFHbEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzsyQ0FDTDtJQUdsQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzZDQUNIO0lBRUE7UUFBbkIsMEJBQWdCLEVBQUU7a0NBQWMsSUFBSTs2Q0FBQztJQUVsQjtRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJOzZDQUFDO0lBbEQxQixJQUFJO1FBRmhCLGdCQUFNLEVBQUU7UUFDUixlQUFLLENBQUMsQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O09BQ2pDLElBQUksQ0FtRGhCO0lBQUQsV0FBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIEluZGV4LCBQcmltYXJ5Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBVcGRhdGVEYXRlQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5ARW50aXR5KClcclxuQEluZGV4KFsgJ3BpZCcsICdjYXNlX2lkJyBdLCB7IHVuaXF1ZTogdHJ1ZSB9KVxyXG5leHBvcnQgY2xhc3MgQ2FzZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgcGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSB2aWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIHVpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSlcclxuXHRkYW1fbnVtOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGRhbV9uYW1lOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2VfaWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6ICcnIH0pXHJcblx0Y2FzZV9uYW1lOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAwIH0pXHJcblx0Y2FzZV9sZXZlbDogbnVtYmVyO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSlcclxuXHRjYXNlX21vZHVsZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSlcclxuXHRjYXNlX3ByZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSlcclxuXHRjYXNlX29wOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2VfZXhwOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2Vfbm90ZTogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogMCB9KVxyXG5cdGNhc2VfdHlwZTogbnVtYmVyO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogMCB9KVxyXG5cdGNhc2Vfc3RhdHVzOiBudW1iZXI7XHJcblxyXG5cdEBDcmVhdGVEYXRlQ29sdW1uKCkgY3JlYXRlX2RhdGU6IERhdGU7XHJcblxyXG5cdEBVcGRhdGVEYXRlQ29sdW1uKCkgdXBkYXRlX2RhdGU6IERhdGU7XHJcbn1cclxuIl19
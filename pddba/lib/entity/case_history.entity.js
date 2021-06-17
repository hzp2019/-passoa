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
var CaseHistory = /** @class */ (function () {
    function CaseHistory() {
        this.id = new bson_1.ObjectID().toString();
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "pid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "cid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "dam_num", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "dam_name", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_id", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_name", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], CaseHistory.prototype, "case_level", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_module", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_pre", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_op", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_exp", void 0);
    __decorate([
        typeorm_1.Column({ default: '' }),
        __metadata("design:type", String)
    ], CaseHistory.prototype, "case_note", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], CaseHistory.prototype, "case_type", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], CaseHistory.prototype, "case_status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], CaseHistory.prototype, "create_date", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], CaseHistory.prototype, "update_date", void 0);
    CaseHistory = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], CaseHistory);
    return CaseHistory;
}());
exports.CaseHistory = CaseHistory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZV9oaXN0b3J5LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9lbnRpdHkvY2FzZV9oaXN0b3J5LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE0RjtBQUM1Riw2QkFBZ0M7QUFHaEM7SUFDQztRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ2dCO1FBQWhCLHVCQUFhLEVBQUU7OzJDQUFZO0lBRWxCO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFFWjtRQUFULGdCQUFNLEVBQUU7OzRDQUFhO0lBRVo7UUFBVCxnQkFBTSxFQUFFOzs0Q0FBYTtJQUVaO1FBQVQsZ0JBQU0sRUFBRTs7NENBQWE7SUFHdEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOztnREFDUjtJQUdoQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O2lEQUNQO0lBR2pCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Z0RBQ1I7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOztrREFDTjtJQUdsQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O21EQUNKO0lBR25CO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7b0RBQ0o7SUFHcEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOztpREFDUDtJQUdqQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O2dEQUNSO0lBR2hCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7aURBQ1A7SUFHakI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOztrREFDTjtJQUdsQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2tEQUNMO0lBR2xCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7b0RBQ0g7SUFFQTtRQUFuQiwwQkFBZ0IsRUFBRTtrQ0FBYyxJQUFJO29EQUFDO0lBRWxCO1FBQW5CLDBCQUFnQixFQUFFO2tDQUFjLElBQUk7b0RBQUM7SUFwRDFCLFdBQVc7UUFEdkIsZ0JBQU0sRUFBRTs7T0FDSSxXQUFXLENBcUR2QjtJQUFELGtCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUNvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ2Jzb24nO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBDYXNlSGlzdG9yeSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0QFByaW1hcnlDb2x1bW4oKSBpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgcGlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oKSB2aWQ6IHN0cmluZztcclxuXHJcblx0QENvbHVtbigpIGNpZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKCkgdWlkOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGRhbV9udW06IHN0cmluZztcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6ICcnIH0pXHJcblx0ZGFtX25hbWU6IHN0cmluZztcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6ICcnIH0pXHJcblx0Y2FzZV9pZDogc3RyaW5nO1xyXG5cclxuXHRAQ29sdW1uKHsgZGVmYXVsdDogJycgfSlcclxuXHRjYXNlX25hbWU6IHN0cmluZztcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6IDAgfSlcclxuXHRjYXNlX2xldmVsOiBudW1iZXI7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2VfbW9kdWxlOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2VfcHJlOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxyXG5cdGNhc2Vfb3A6IHN0cmluZztcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6ICcnIH0pXHJcblx0Y2FzZV9leHA6IHN0cmluZztcclxuXHJcblx0QENvbHVtbih7IGRlZmF1bHQ6ICcnIH0pXHJcblx0Y2FzZV9ub3RlOiBzdHJpbmc7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAwIH0pXHJcblx0Y2FzZV90eXBlOiBudW1iZXI7XHJcblxyXG5cdEBDb2x1bW4oeyBkZWZhdWx0OiAwIH0pXHJcblx0Y2FzZV9zdGF0dXM6IG51bWJlcjtcclxuXHJcblx0QENyZWF0ZURhdGVDb2x1bW4oKSBjcmVhdGVfZGF0ZTogRGF0ZTtcclxuXHJcblx0QFVwZGF0ZURhdGVDb2x1bW4oKSB1cGRhdGVfZGF0ZTogRGF0ZTtcclxufVxyXG4iXX0=
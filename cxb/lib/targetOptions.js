"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("./environment");
var TargetOptions = /** @class */ (function () {
    function TargetOptions(options) {
        this.options = options || {};
    }
    Object.defineProperty(TargetOptions.prototype, "arch", {
        get: function () {
            return this.options.arch || environment.arch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetOptions.prototype, "isX86", {
        get: function () {
            return this.arch === 'ia32';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetOptions.prototype, "isX64", {
        get: function () {
            return this.arch === 'x64';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetOptions.prototype, "isArm", {
        get: function () {
            return this.arch === 'arm';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetOptions.prototype, "runtime", {
        get: function () {
            return this.options.runtime || environment.runtime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetOptions.prototype, "runtimeVersion", {
        get: function () {
            return this.options.runtimeVersion || environment.runtimeVersion;
        },
        enumerable: true,
        configurable: true
    });
    return TargetOptions;
}());
exports.TargetOptions = TargetOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0T3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90YXJnZXRPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBTzdDO0lBRUMsdUJBQVksT0FBa0I7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxzQkFBSSwrQkFBSTthQUFSO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksZ0NBQUs7YUFBVDtZQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxnQ0FBSzthQUFUO1lBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdDQUFLO2FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksa0NBQU87YUFBWDtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFjO2FBQWxCO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmludGVyZmFjZSBpZk9wdGlvbnMge1xuXHRydW50aW1lVmVyc2lvbj86IHN0cmluZztcblx0cnVudGltZT86IHN0cmluZztcblx0YXJjaD86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBUYXJnZXRPcHRpb25zIHtcblx0cHJpdmF0ZSBvcHRpb25zOiBpZk9wdGlvbnM7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlmT3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdH1cblx0Z2V0IGFyY2goKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5hcmNoIHx8IGVudmlyb25tZW50LmFyY2g7XG5cdH1cblx0Z2V0IGlzWDg2KCkge1xuXHRcdHJldHVybiB0aGlzLmFyY2ggPT09ICdpYTMyJztcblx0fVxuXHRnZXQgaXNYNjQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXJjaCA9PT0gJ3g2NCc7XG5cdH1cblx0Z2V0IGlzQXJtKCkge1xuXHRcdHJldHVybiB0aGlzLmFyY2ggPT09ICdhcm0nO1xuXHR9XG5cdGdldCBydW50aW1lKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbnMucnVudGltZSB8fCBlbnZpcm9ubWVudC5ydW50aW1lO1xuXHR9XG5cdGdldCBydW50aW1lVmVyc2lvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLnJ1bnRpbWVWZXJzaW9uIHx8IGVudmlyb25tZW50LnJ1bnRpbWVWZXJzaW9uO1xuXHR9XG59XG4iXX0=
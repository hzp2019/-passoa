'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var log = require('npmlog');
var CMLog = /** @class */ (function () {
    function CMLog(options) {
        this.options = options || {};
        this.debug = require('debug')(this.options.logName || 'cxb');
    }
    Object.defineProperty(CMLog.prototype, "level", {
        get: function () {
            if (this.options.noLog) {
                return 'silly';
            }
            else {
                return log.level;
            }
        },
        enumerable: true,
        configurable: true
    });
    CMLog.prototype.silly = function (cat, msg) {
        if (this.options.noLog) {
            this.debug(cat + ': ' + msg);
        }
        else {
            log.silly(cat, msg);
        }
    };
    CMLog.prototype.verbose = function (cat, msg) {
        if (this.options.noLog) {
            this.debug(cat + ': ' + msg);
        }
        else {
            log.verbose(cat, msg);
        }
    };
    CMLog.prototype.info = function (cat, msg) {
        if (this.options.noLog) {
            this.debug(cat + ': ' + msg);
        }
        else {
            log.info(cat, msg);
        }
    };
    CMLog.prototype.warn = function (cat, msg) {
        if (this.options.noLog) {
            this.debug(cat + ': ' + msg);
        }
        else {
            log.warn(cat, msg);
        }
    };
    CMLog.prototype.http = function (cat, msg) {
        if (this.options.noLog) {
            this.debug(cat + ': ' + msg);
        }
        else {
            log.http(cat, msg);
        }
    };
    CMLog.prototype.error = function (cat, msg) {
        if (this.options.noLog) {
            this.debug(cat + ': ' + msg);
        }
        else {
            log.error(cat, msg);
        }
    };
    return CMLog;
}());
exports.CMLog = CMLog;
function slog(msg) {
    //readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, undefined);
    process.stdout.write(msg);
}
exports.slog = slog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21Mb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY21Mb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLG1DQUFxQztBQUNyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFNNUI7SUFHQyxlQUFZLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0Qsc0JBQUksd0JBQUs7YUFBVDtZQUNDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLE9BQU8sT0FBTyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ04sT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2pCO1FBQ0YsQ0FBQzs7O09BQUE7SUFDRCxxQkFBSyxHQUFMLFVBQU0sR0FBVyxFQUFFLEdBQVc7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNOLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0YsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxHQUFXLEVBQUUsR0FBVztRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ04sR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDRixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxHQUFXO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7SUFFRCxvQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLEdBQVc7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsR0FBVztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBRUQscUJBQUssR0FBTCxVQUFNLEdBQVcsRUFBRSxHQUFXO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNGLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQTdERCxJQTZEQztBQTdEWSxzQkFBSztBQThEbEIsU0FBZ0IsSUFBSSxDQUFDLEdBQVc7SUFDL0Isd0NBQXdDO0lBQ3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUpELG9CQUlDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xubGV0IGxvZyA9IHJlcXVpcmUoJ25wbWxvZycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIGlmQ01Mb2cge1xuXHRub0xvZz86IGJvb2xlYW47XG5cdGxvZ05hbWU/OiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgQ01Mb2cge1xuXHRwcml2YXRlIG9wdGlvbnM6IGlmQ01Mb2c7XG5cdHByaXZhdGUgZGVidWc6IGFueTtcblx0Y29uc3RydWN0b3Iob3B0aW9uczogaWZDTUxvZykge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5kZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykodGhpcy5vcHRpb25zLmxvZ05hbWUgfHwgJ2N4YicpO1xuXHR9XG5cdGdldCBsZXZlbCgpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLm5vTG9nKSB7XG5cdFx0XHRyZXR1cm4gJ3NpbGx5Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGxvZy5sZXZlbDtcblx0XHR9XG5cdH1cblx0c2lsbHkoY2F0OiBzdHJpbmcsIG1zZzogc3RyaW5nKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5ub0xvZykge1xuXHRcdFx0dGhpcy5kZWJ1ZyhjYXQgKyAnOiAnICsgbXNnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9nLnNpbGx5KGNhdCwgbXNnKTtcblx0XHR9XG5cdH1cblxuXHR2ZXJib3NlKGNhdDogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMubm9Mb2cpIHtcblx0XHRcdHRoaXMuZGVidWcoY2F0ICsgJzogJyArIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZy52ZXJib3NlKGNhdCwgbXNnKTtcblx0XHR9XG5cdH1cblxuXHRpbmZvKGNhdDogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMubm9Mb2cpIHtcblx0XHRcdHRoaXMuZGVidWcoY2F0ICsgJzogJyArIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZy5pbmZvKGNhdCwgbXNnKTtcblx0XHR9XG5cdH1cblxuXHR3YXJuKGNhdDogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMubm9Mb2cpIHtcblx0XHRcdHRoaXMuZGVidWcoY2F0ICsgJzogJyArIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZy53YXJuKGNhdCwgbXNnKTtcblx0XHR9XG5cdH1cblxuXHRodHRwKGNhdDogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMubm9Mb2cpIHtcblx0XHRcdHRoaXMuZGVidWcoY2F0ICsgJzogJyArIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZy5odHRwKGNhdCwgbXNnKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvcihjYXQ6IHN0cmluZywgbXNnOiBzdHJpbmcpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLm5vTG9nKSB7XG5cdFx0XHR0aGlzLmRlYnVnKGNhdCArICc6ICcgKyBtc2cpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2cuZXJyb3IoY2F0LCBtc2cpO1xuXHRcdH1cblx0fVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNsb2cobXNnOiBzdHJpbmcpIHtcblx0Ly9yZWFkbGluZS5jbGVhckxpbmUocHJvY2Vzcy5zdGRvdXQsIDApO1xuXHRyZWFkbGluZS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMCwgdW5kZWZpbmVkKTtcblx0cHJvY2Vzcy5zdGRvdXQud3JpdGUobXNnKTtcbn1cbiJdfQ==
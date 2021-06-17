"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adbt = void 0;
var child_process_1 = require("child_process");
var ADBT = /** @class */ (function () {
    function ADBT() {
    }
    ADBT.prototype.executeCmd = function (cmd) {
        var ret = 0;
        try {
            var tmp = child_process_1.execSync(cmd);
            console.log(tmp.toString());
            if(tmp.toString().indexOf("unable") > -1){
                ret = -2;
            }
        }
        catch (error) {
            console.log(error);
            ret = -1;
        }
        finally {
            console.log(ret);
            return ret;
        }
    };
    ADBT.prototype.installApp = function (cmd) {
        if (cmd === void 0) { cmd = 'adb install btservice-latest.apk'; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.setupWifi = function (cmd) {
        if (cmd === void 0) { cmd = 'adb tcpip 5555'; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.connect = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb connect " + ip; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.dial = function (ip, tel, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell am start -a android.intent.action.CALL tel:" + tel; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.hangup = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell input keyevent 6"; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.answer = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell input keyevent 5"; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.openBt = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell am startservice -a org.losper.btservice.BtServiceOn --ei \"action\" 1"; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.closeBt = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell am startservice -a org.losper.btservice.BtServiceOn --ei \"action\" 0"; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.playFile = function (ip, file, type, cmd) {
        if (file === void 0) { file = 'file:///sdcard/Music/test.mp3'; }
        if (type === void 0) { type = 'audio/mp3'; }
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell am start -a \"android.intent.action.VIEW\" -t \"" + type + "\" -d \"" + file + "\""; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.play = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell input keyevent 126"; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.pause = function (ip, cmd) {
        if (cmd === void 0) { cmd = "adb -s " + ip + " shell input keyevent 127"; }
        return this.executeCmd(cmd);
    };
    ADBT.prototype.keyevent = function (ip, key) {
        var cmd = "adb -s " + ip + " shell input keyevent " + key;
        return this.executeCmd(cmd);
    };
    return ADBT;
}());
exports.adbt = new ADBT();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQXlDO0FBQ3pDO0lBQ0M7SUFBZSxDQUFDO0lBQ1IseUJBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJO1lBQ0gsSUFBSSxHQUFHLEdBQUcsd0JBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNUO2dCQUFTO1lBQ1QsT0FBTyxHQUFHLENBQUM7U0FDWDtJQUNGLENBQUM7SUFDRCx5QkFBVSxHQUFWLFVBQVcsR0FBZ0Q7UUFBaEQsb0JBQUEsRUFBQSx3Q0FBZ0Q7UUFDMUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCx3QkFBUyxHQUFULFVBQVUsR0FBOEI7UUFBOUIsb0JBQUEsRUFBQSxzQkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxzQkFBTyxHQUFQLFVBQVEsRUFBVSxFQUFFLEdBQWlDO1FBQWpDLG9CQUFBLEVBQUEsdUJBQTZCLEVBQUk7UUFDcEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxtQkFBSSxHQUFKLFVBQ0MsRUFBVSxFQUNWLEdBQVcsRUFDWCxHQUFvRjtRQUFwRixvQkFBQSxFQUFBLGtCQUF3QixFQUFFLDBEQUFxRCxHQUFLO1FBRXBGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QscUJBQU0sR0FBTixVQUFPLEVBQVUsRUFBRSxHQUFtRDtRQUFuRCxvQkFBQSxFQUFBLGtCQUF3QixFQUFFLDRCQUF5QjtRQUNyRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELHFCQUFNLEdBQU4sVUFBTyxFQUFVLEVBQUUsR0FBbUQ7UUFBbkQsb0JBQUEsRUFBQSxrQkFBd0IsRUFBRSw0QkFBeUI7UUFDckUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxxQkFBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLEdBQTZGO1FBQTdGLG9CQUFBLEVBQUEsdUZBQTZGO1FBQy9HLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsc0JBQU8sR0FBUCxVQUFRLEVBQVUsRUFBRSxHQUE2RjtRQUE3RixvQkFBQSxFQUFBLHVGQUE2RjtRQUNoSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELHVCQUFRLEdBQVIsVUFDQyxFQUFVLEVBQ1YsSUFBOEMsRUFDOUMsSUFBMEIsRUFDMUIsR0FBcUc7UUFGckcscUJBQUEsRUFBQSxzQ0FBOEM7UUFDOUMscUJBQUEsRUFBQSxrQkFBMEI7UUFDMUIsb0JBQUEsRUFBQSxrQkFBd0IsRUFBRSwrREFBdUQsSUFBSSxnQkFBUyxJQUFJLE9BQUc7UUFFckcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxtQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEdBQXFEO1FBQXJELG9CQUFBLEVBQUEsa0JBQXdCLEVBQUUsOEJBQTJCO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0JBQUssR0FBTCxVQUFNLEVBQVUsRUFBRSxHQUFxRDtRQUFyRCxvQkFBQSxFQUFBLGtCQUF3QixFQUFFLDhCQUEyQjtRQUN0RSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWNTeW5jIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmNsYXNzIEFEQlQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHRwcml2YXRlIGV4ZWN1dGVDbWQoY21kOiBzdHJpbmcpIHtcclxuXHRcdGxldCByZXQgPSAwO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHRtcCA9IGV4ZWNTeW5jKGNtZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRtcC50b1N0cmluZygpKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0cmV0ID0gLTE7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpbnN0YWxsQXBwKGNtZDogc3RyaW5nID0gJ2FkYiBpbnN0YWxsIGJ0c2VydmljZS1sYXRlc3QuYXBrJykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXhlY3V0ZUNtZChjbWQpO1xyXG5cdH1cclxuXHRzZXR1cFdpZmkoY21kOiBzdHJpbmcgPSAnYWRiIHRjcGlwIDU1NTUnKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLmV4ZWN1dGVDbWQoY21kKTtcclxuXHR9XHJcblx0Y29ubmVjdChpcDogc3RyaW5nLCBjbWQ6IHN0cmluZyA9IGBhZGIgY29ubmVjdCAke2lwfWApIHtcclxuXHRcdHJldHVybiB0aGlzLmV4ZWN1dGVDbWQoY21kKTtcclxuXHR9XHJcblx0ZGlhbChcclxuXHRcdGlwOiBzdHJpbmcsXHJcblx0XHR0ZWw6IHN0cmluZyxcclxuXHRcdGNtZDogc3RyaW5nID0gYGFkYiAtcyAke2lwfSBzaGVsbCBhbSBzdGFydCAtYSBhbmRyb2lkLmludGVudC5hY3Rpb24uQ0FMTCB0ZWw6JHt0ZWx9YFxyXG5cdCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXhlY3V0ZUNtZChjbWQpO1xyXG5cdH1cclxuXHRoYW5ndXAoaXA6IHN0cmluZywgY21kOiBzdHJpbmcgPSBgYWRiIC1zICR7aXB9IHNoZWxsIGlucHV0IGtleWV2ZW50IDZgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5leGVjdXRlQ21kKGNtZCk7XHJcblx0fVxyXG5cdGFuc3dlcihpcDogc3RyaW5nLCBjbWQ6IHN0cmluZyA9IGBhZGIgLXMgJHtpcH0gc2hlbGwgaW5wdXQga2V5ZXZlbnQgNWApIHtcclxuXHRcdHJldHVybiB0aGlzLmV4ZWN1dGVDbWQoY21kKTtcclxuXHR9XHJcblx0b3BlbkJ0KGlwOiBzdHJpbmcsIGNtZDogc3RyaW5nID0gYGFkYiBzaGVsbCBhbSBzdGFydHNlcnZpY2UgLWEgb3JnLmxvc3Blci5idHNlcnZpY2UuQnRTZXJ2aWNlT24gLS1laSBcImFjdGlvblwiIDFgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5leGVjdXRlQ21kKGNtZCk7XHJcblx0fVxyXG5cdGNsb3NlQnQoaXA6IHN0cmluZywgY21kOiBzdHJpbmcgPSBgYWRiIHNoZWxsIGFtIHN0YXJ0c2VydmljZSAtYSBvcmcubG9zcGVyLmJ0c2VydmljZS5CdFNlcnZpY2VPbiAtLWVpIFwiYWN0aW9uXCIgMGApIHtcclxuXHRcdHJldHVybiB0aGlzLmV4ZWN1dGVDbWQoY21kKTtcclxuXHR9XHJcblx0cGxheUZpbGUoXHJcblx0XHRpcDogc3RyaW5nLFxyXG5cdFx0ZmlsZTogc3RyaW5nID0gJ2ZpbGU6Ly8vc2RjYXJkL011c2ljL3Rlc3QubXAzJyxcclxuXHRcdHR5cGU6IHN0cmluZyA9ICdhdWRpby9tcDMnLFxyXG5cdFx0Y21kOiBzdHJpbmcgPSBgYWRiIC1zICR7aXB9IHNoZWxsIGFtIHN0YXJ0IC1hIFwiYW5kcm9pZC5pbnRlbnQuYWN0aW9uLlZJRVdcIiAtdCBcIiR7dHlwZX1cIiAtZCBcIiR7ZmlsZX1cImBcclxuXHQpIHtcclxuXHRcdHJldHVybiB0aGlzLmV4ZWN1dGVDbWQoY21kKTtcclxuXHR9XHJcblx0cGxheShpcDogc3RyaW5nLCBjbWQ6IHN0cmluZyA9IGBhZGIgLXMgJHtpcH0gc2hlbGwgaW5wdXQga2V5ZXZlbnQgMTI2YCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXhlY3V0ZUNtZChjbWQpO1xyXG5cdH1cclxuXHRwYXVzZShpcDogc3RyaW5nLCBjbWQ6IHN0cmluZyA9IGBhZGIgLXMgJHtpcH0gc2hlbGwgaW5wdXQga2V5ZXZlbnQgMTI3YCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXhlY3V0ZUNtZChjbWQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgbGV0IGFkYnQgPSBuZXcgQURCVCgpO1xyXG4iXX0=
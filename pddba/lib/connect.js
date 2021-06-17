"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Connect = /** @class */ (function () {
    function Connect() {
        this.pgconfig = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'auto',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            // logging: 'all',
            // logger: 'file',
            synchronize: true
        };
        this.sqliteconfig = {
            type: 'sqlite',
            database: 'test.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        };
    }
    Connect.prototype.connectDB = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        config.entities = [__dirname + '/**/*.entity{.ts,.js}'];
                        config.synchronize = true;
                        typeorm_1.createConnection(config)
                            .then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (this.inst && this.inst.isConnected) {
                                    this.inst.close();
                                }
                                this.inst = connection;
                                resolve(true);
                                return [2 /*return*/];
                            });
                        }); })
                            .catch(function (error) {
                            console.log('Error: ', error);
                            resolve(false);
                        });
                    })];
            });
        });
    };
    Connect.prototype.changeDB = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.inst || _this.inst.options.type != opts.type) {
                            typeorm_1.createConnection(opts)
                                .then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (this.inst && this.inst.isConnected) {
                                        this.inst.close();
                                    }
                                    this.inst = connection;
                                    resolve(true);
                                    return [2 /*return*/];
                                });
                            }); })
                                .catch(function (error) {
                                console.log('Error: ', error);
                                resolve(false);
                            });
                        }
                    })];
            });
        });
    };
    Connect.prototype.getConnection = function () {
        return this.inst;
    };
    return Connect;
}());
exports.connect = new Connect();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTBFO0FBQzFFO0lBb0JDO1FBbEJRLGFBQVEsR0FBc0I7WUFDckMsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsQ0FBRSxTQUFTLEdBQUcsdUJBQXVCLENBQUU7WUFDakQsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBQ00saUJBQVksR0FBc0I7WUFDekMsSUFBSSxFQUFFLFFBQVE7WUFDZCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsQ0FBRSxTQUFTLEdBQUcsdUJBQXVCLENBQUU7WUFDakQsV0FBVyxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNhLENBQUM7SUFDViwyQkFBUyxHQUFmLFVBQWdCLE1BQVc7Ozs7Z0JBQzFCLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2xDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBRSxTQUFTLEdBQUcsdUJBQXVCLENBQUUsQ0FBQzt3QkFDMUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQzFCLDBCQUFnQixDQUFDLE1BQU0sQ0FBQzs2QkFDdEIsSUFBSSxDQUFDLFVBQU8sVUFBVTs7Z0NBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQ0FDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQ0FDbEI7Z0NBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7Z0NBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OzZCQUNkLENBQUM7NkJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSzs0QkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQixDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFDSywwQkFBUSxHQUFkLFVBQWUsSUFBdUI7Ozs7Z0JBQ3JDLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2xDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUN0RCwwQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUNBQ3BCLElBQUksQ0FBQyxVQUFPLFVBQVU7O29DQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7d0NBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7cUNBQ2xCO29DQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO29DQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7OztpQ0FDZCxDQUFDO2lDQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0NBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDaEIsQ0FBQyxDQUFDLENBQUM7eUJBQ0o7b0JBQ0YsQ0FBQyxDQUFDLEVBQUM7OztLQUNIO0lBQ0QsK0JBQWEsR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBQ0YsY0FBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUFDVSxRQUFBLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29ubmVjdGlvbiwgQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tICd0eXBlb3JtJztcclxuY2xhc3MgQ29ubmVjdCB7XHJcblx0cHJpdmF0ZSBpbnN0OiBDb25uZWN0aW9uO1xyXG5cdHByaXZhdGUgcGdjb25maWc6IENvbm5lY3Rpb25PcHRpb25zID0ge1xyXG5cdFx0dHlwZTogJ3Bvc3RncmVzJyxcclxuXHRcdGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG5cdFx0cG9ydDogNTQzMixcclxuXHRcdHVzZXJuYW1lOiAncG9zdGdyZXMnLFxyXG5cdFx0cGFzc3dvcmQ6ICcxMjM0NTYnLFxyXG5cdFx0ZGF0YWJhc2U6ICdhdXRvJyxcclxuXHRcdGVudGl0aWVzOiBbIF9fZGlybmFtZSArICcvKiovKi5lbnRpdHl7LnRzLC5qc30nIF0sXHJcblx0XHQvLyBsb2dnaW5nOiAnYWxsJyxcclxuXHRcdC8vIGxvZ2dlcjogJ2ZpbGUnLFxyXG5cdFx0c3luY2hyb25pemU6IHRydWVcclxuXHR9O1xyXG5cdHByaXZhdGUgc3FsaXRlY29uZmlnOiBDb25uZWN0aW9uT3B0aW9ucyA9IHtcclxuXHRcdHR5cGU6ICdzcWxpdGUnLFxyXG5cdFx0ZGF0YWJhc2U6ICd0ZXN0LnNxbGl0ZScsXHJcblx0XHRlbnRpdGllczogWyBfX2Rpcm5hbWUgKyAnLyoqLyouZW50aXR5ey50cywuanN9JyBdLFxyXG5cdFx0c3luY2hyb25pemU6IHRydWVcclxuXHR9O1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHRhc3luYyBjb25uZWN0REIoY29uZmlnOiBhbnkpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbmZpZy5lbnRpdGllcyA9IFsgX19kaXJuYW1lICsgJy8qKi8qLmVudGl0eXsudHMsLmpzfScgXTtcclxuXHRcdFx0Y29uZmlnLnN5bmNocm9uaXplID0gdHJ1ZTtcclxuXHRcdFx0Y3JlYXRlQ29ubmVjdGlvbihjb25maWcpXHJcblx0XHRcdFx0LnRoZW4oYXN5bmMgKGNvbm5lY3Rpb24pID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmluc3QgJiYgdGhpcy5pbnN0LmlzQ29ubmVjdGVkKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5zdC5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5pbnN0ID0gY29ubmVjdGlvbjtcclxuXHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcclxuXHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFzeW5jIGNoYW5nZURCKG9wdHM6IENvbm5lY3Rpb25PcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAoIXRoaXMuaW5zdCB8fCB0aGlzLmluc3Qub3B0aW9ucy50eXBlICE9IG9wdHMudHlwZSkge1xyXG5cdFx0XHRcdGNyZWF0ZUNvbm5lY3Rpb24ob3B0cylcclxuXHRcdFx0XHRcdC50aGVuKGFzeW5jIChjb25uZWN0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmluc3QgJiYgdGhpcy5pbnN0LmlzQ29ubmVjdGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbnN0LmNsb3NlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5pbnN0ID0gY29ubmVjdGlvbjtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0Q29ubmVjdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3Q7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBsZXQgY29ubmVjdCA9IG5ldyBDb25uZWN0KCk7XHJcbiJdfQ==
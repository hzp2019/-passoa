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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var url = require("url");
var path = require("path");
var cp = require("child_process");
var dist_1 = require("./dist");
var environment = require("./environment");
var downloader_1 = require("./downloader");
var util_1 = require("util");
var uploader_1 = require("./uploader");
var dist = new dist_1.Dist();
var downloader = new downloader_1.Downloader({});
process.on('unhandledRejection', function (error) {
    console.error('unhandledRejection', error);
    process.exit(1); // To exit with a 'failure' code
});
function initConfig() {
    var pkg = require(process.cwd() + "/package.json");
    var env = process.env;
    var config = {
        name: pkg.name,
        configuration: env.build_type || 'Release',
        external: [],
        version: pkg.version,
        platform: plat_format(env.platform || process.platform),
        arch: arch_format(env.arch || process.arch),
        build_cmd: [],
        toolset_path: env.toolset_path || '',
        make_path: env.make_path || 'make',
        module_name: pkg.name,
        module_path: 'build',
        remote_path: 'repertory/cxb/',
        package_name: '',
        host: '',
        hosted_path: '',
        hosted_tarball: '',
        staged_tarball: '',
        method: 'put',
        form: false,
        root_dir: process.cwd()
    };
    var opts = require(config.root_dir + "/cxb.config.js")(config);
    mergeConfig(config, opts);
    config.hosted_path = url.resolve(config.host, config.remote_path);
    config.hosted_tarball = url.resolve(config.hosted_path, config.package_name);
    return config;
}
exports.initConfig = initConfig;
function mergeConfig(config, opts) {
    for (var key in opts) {
        if (opts.hasOwnProperty(key) && config.hasOwnProperty(key)) {
            config[key] = opts[key];
        }
    }
}
function run(argv) {
    return __awaiter(this, void 0, void 0, function () {
        var config, cwd, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dist.ensureDownloaded()];
                case 1:
                    _a.sent();
                    if (usage(argv))
                        return [2 /*return*/, -1];
                    config = initConfig();
                    if (!(argv.b || argv.build)) return [3 /*break*/, 3];
                    return [4 /*yield*/, build(config)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 3:
                    if (!(argv.i || argv.install)) return [3 /*break*/, 7];
                    cwd = process.cwd();
                    r = cwd.indexOf('node_modules');
                    if (!(r < 0)) return [3 /*break*/, 4];
                    console.log('donot install when process.cwd in this project!!!');
                    return [2 /*return*/, 0];
                case 4: return [4 /*yield*/, install(config)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [3 /*break*/, 12];
                case 7:
                    if (!(argv.p || argv.pack)) return [3 /*break*/, 9];
                    return [4 /*yield*/, pack(config)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 9:
                    if (!(argv.r || argv.release)) return [3 /*break*/, 11];
                    return [4 /*yield*/, release(config)];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    console.log('cxb: show help with --help');
                    return [2 /*return*/, -2];
                case 12: return [2 /*return*/, 0];
            }
        });
    });
}
exports.run = run;
function usage(argv) {
    var help = argv.h || argv.help;
    if (help) {
        // If they didn't ask for help, then this is not a "success"
        var log = help ? console.log : console.error;
        log('Usage: pm <modules> [<Options> ...]');
        log('');
        log('  install native modules@passoa');
        log('');
        log('Options:');
        log('');
        log('  -h, --help     Display this usage info');
        log('  -b, --build   build cpp for project');
        log('  -r, --release   release node tgz for project');
        log('  -i, --install   install cpp module(it will build cpp module if could not download from remote)');
        return -1;
    }
    return 0;
}
function eval_template(template, opts) {
    template = template.replace(/\{([a-zA-Z0-9_-]+)\}/g, function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var key = opts[args[0]] || process.env[args[0]] || 'undefined';
        return key;
    });
    // Object.keys(opts).forEach(function(key) {
    // 	var pattern = '{' + key + '}';
    // 	while (template.indexOf(pattern) > -1) {
    // 		template = template.replace(pattern, opts[key]);
    // 	}
    // });
    return template;
}
// url.resolve needs single trailing slash
// to behave correctly, otherwise a double slash
// may end up in the url which breaks requests
// and a lacking slash may not lead to proper joining
function fix_slashes(pathname) {
    if (pathname.slice(-1) != '/') {
        return pathname + '/';
    }
    return pathname;
}
// remove double slashes
// note: path.normalize will not work because
// it will convert forward to back slashes
function drop_double_slashes(pathname) {
    return pathname.replace(/\/\//g, '/');
}
function plat_format(plat) {
    switch (plat) {
        case 'win32':
        case 'windows':
            return 'windows';
    }
    return plat;
}
function arch_format(arch) {
    switch (arch) {
        case 'ia32':
        case 'x32':
        case 'x86':
            return 'x86';
        case 'x86_64':
        case 'x64':
            return 'x64';
    }
    return arch;
}
function isStringArray(arr) {
    var e_1, _a;
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var iterator = arr_1_1.value;
            if (typeof iterator != 'string')
                return false;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}
function isStringArray2(arr) {
    var e_2, _a;
    try {
        for (var arr_2 = __values(arr), arr_2_1 = arr_2.next(); !arr_2_1.done; arr_2_1 = arr_2.next()) {
            var iterator = arr_2_1.value;
            if (!Array.isArray(iterator) && !isStringArray(iterator))
                return false;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (arr_2_1 && !arr_2_1.done && (_a = arr_2.return)) _a.call(arr_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return true;
}
function addDefaultCmd(bc, config) {
    var incPaths;
    if (dist.headerOnly) {
        incPaths = [path.join(dist.internalPath, '/include/node')];
    }
    else {
        var nodeH = path.join(dist.internalPath, '/src');
        var v8H = path.join(dist.internalPath, '/deps/v8/include');
        var uvH = path.join(dist.internalPath, '/deps/uv/include');
        incPaths = [nodeH, v8H, uvH];
    }
    // Includes:
    bc.push("-DCMAKE_JS_INC=" + incPaths.join(';'));
    if (environment.isWin) {
        // Win
        var libs = dist.winLibs;
        if (libs.length) {
            bc.push("-DCMAKE_JS_LIB=" + libs.join(';'));
        }
    }
    bc.push("-DCXB_MODULE_DIST=" + config.root_dir + "/" + config.module_path);
}
function buildByStringArray(build_str, config, bc) {
    for (var key in bc) {
        if (bc.hasOwnProperty(key)) {
            var element = bc[key];
            bc[key] = eval_template(element, config);
        }
    }
    fs.emptyDirSync("tmp/" + build_str);
    process.chdir("tmp/" + build_str);
    bc = ['../../'].concat(bc);
    addDefaultCmd(bc, config);
    console.log(bc);
    var r = cp.spawnSync('cmake', bc, { stdio: 'inherit' });
    if (r.status) {
        throw new Error('cmake generator fails');
    }
    r = cp.spawnSync('cmake', ['--build', './', '--config', config.configuration], { stdio: 'inherit' });
    if (r.status) {
        throw new Error('cmake build fails');
    }
    process.chdir('../../');
}
function build(config) {
    return __awaiter(this, void 0, void 0, function () {
        var task1, task2, key, obj, url_1, tmp, dst, build_str, bc, idx, bc_1, bc_1_1, iterator;
        var e_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!config.external) return [3 /*break*/, 3];
                    task1 = new Array(), task2 = new Array();
                    for (key in config.external) {
                        if (config.external.hasOwnProperty(key)) {
                            obj = config.external[key];
                            url_1 = '';
                            if (util_1.isArray(obj)) {
                                url_1 = obj[0];
                            }
                            else if (util_1.isString(obj)) {
                                url_1 = obj;
                            }
                            else {
                                throw new Error('cxb.external config has error');
                            }
                            tmp = config.root_dir + "/tmp/stage/" + key + "/" + path.basename(url_1);
                            dst = path.join(config.root_dir + "/3rd", key);
                            if (fs.existsSync(dst)) {
                                break;
                            }
                            console.log(url_1, tmp);
                            task1.push({ src: url_1, dst: tmp });
                            task2.push({ src: tmp, dst: dst, option: { strip: obj[1] } });
                        }
                    }
                    return [4 /*yield*/, downloader.downloadAll(task1)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, downloader.unzipAll(task2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    if (config.build_cmd) {
                        build_str = config.platform + "_" + config.arch;
                        bc = config.build_cmd[build_str];
                        if (!bc) {
                            throw new Error("please check your config for " + build_str);
                        }
                        if (Array.isArray(bc)) {
                            if (isStringArray(bc)) {
                                buildByStringArray(build_str, config, bc);
                            }
                            else if (isStringArray2(bc)) {
                                idx = 0;
                                try {
                                    for (bc_1 = __values(bc), bc_1_1 = bc_1.next(); !bc_1_1.done; bc_1_1 = bc_1.next()) {
                                        iterator = bc_1_1.value;
                                        buildByStringArray(build_str + "_" + idx++, config, iterator);
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (bc_1_1 && !bc_1_1.done && (_a = bc_1.return)) _a.call(bc_1);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                            }
                            else {
                                throw new Error("please check your config for " + build_str);
                            }
                        }
                    }
                    else {
                        throw new Error('build_cmd has not in cxb.config.js');
                    }
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.build = build;
function install(config) {
    return __awaiter(this, void 0, void 0, function () {
        var tarball, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tarball = config.module_name + "-v" + config.version + "-" + config.platform + "-" + config.arch + ".tar.gz";
                    config.staged_tarball = path.join('tmp/stage', tarball);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, downloader.downloadAll([{ src: config.hosted_tarball, dst: config.staged_tarball }])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, downloader.unzipAll([{ src: config.staged_tarball, dst: './' }])];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1.message);
                    return [2 /*return*/, build(config)];
                case 5: return [2 /*return*/, 0];
            }
        });
    });
}
exports.install = install;
function release(config) {
    return __awaiter(this, void 0, void 0, function () {
        var up, src, env;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    up = new uploader_1.Uploader();
                    src = path.join(config.root_dir, config.module_path);
                    config.staged_tarball = path.join(config.root_dir, "tmp/" + config.module_name + ".tar.gz");
                    return [4 /*yield*/, up.packTgz(src, config.staged_tarball)];
                case 1:
                    _a.sent();
                    env = process.env;
                    config.token = Buffer.from(env.CXBUSERNAME + ":" + env.CXBPASSWORD, 'utf8').toString('base64');
                    return [4 /*yield*/, up.upload(config.hosted_tarball, config.staged_tarball, config.token, {
                            method: config.method,
                            form: config.form
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.release = release;
function pack(config) {
    return __awaiter(this, void 0, void 0, function () {
        var up, src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    up = new uploader_1.Uploader();
                    src = path.join(config.root_dir, config.module_path);
                    config.staged_tarball = path.join(config.root_dir, "tmp/" + config.module_name + ".tar.gz");
                    return [4 /*yield*/, up.packTgz(src, config.staged_tarball)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.pack = pack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUUvQix5QkFBMkI7QUFDM0IsMkJBQTZCO0FBQzdCLGtDQUFvQztBQUNwQywrQkFBOEI7QUFDOUIsMkNBQTZDO0FBQzdDLDJDQUFnRDtBQUNoRCw2QkFBeUM7QUFDekMsdUNBQXNDO0FBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBMEJwQyxPQUFPLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsS0FBSztJQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7QUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFnQixVQUFVO0lBQ3pCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBSSxPQUFPLENBQUMsR0FBRyxFQUFFLGtCQUFlLENBQUMsQ0FBQztJQUNyRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3RCLElBQUksTUFBTSxHQUFHO1FBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1FBQ2QsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLElBQUksU0FBUztRQUMxQyxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FB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TTs0QkFDckIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNqQixDQUFDLEVBQUE7O29CQUhGLFNBR0UsQ0FBQztvQkFDSCxzQkFBTyxDQUFDLEVBQUM7Ozs7Q0FDVDtBQVpELDBCQVlDO0FBQ0QsU0FBc0IsSUFBSSxDQUFDLE1BQW9COzs7Ozs7b0JBQzFDLEVBQUUsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztvQkFDcEIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pELE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQU8sTUFBTSxDQUFDLFdBQVcsWUFBUyxDQUFDLENBQUM7b0JBQ2hGLHFCQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQTt3QkFBbkQsc0JBQU8sU0FBNEMsRUFBQzs7OztDQUNwRDtBQUxELG9CQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xyXG5cclxuaW1wb3J0ICogYXMgdXJsIGZyb20gJ3VybCc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGNwIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgeyBEaXN0IH0gZnJvbSAnLi9kaXN0JztcclxuaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IERvd25sb2FkZXIsIGlmS3kgfSBmcm9tICcuL2Rvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBpc0FycmF5LCBpc1N0cmluZyB9IGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vdXBsb2FkZXInO1xyXG5sZXQgZGlzdCA9IG5ldyBEaXN0KCk7XHJcbmxldCBkb3dubG9hZGVyID0gbmV3IERvd25sb2FkZXIoe30pO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZ09iamVjdCB7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGNvbmZpZ3VyYXRpb246IHN0cmluZztcclxuXHRleHRlcm5hbDogYW55W107XHJcblx0dmVyc2lvbjogc3RyaW5nO1xyXG5cdHBsYXRmb3JtOiBzdHJpbmc7XHJcblx0YXJjaDogc3RyaW5nO1xyXG5cdGJ1aWxkX2NtZDogYW55O1xyXG5cdHRvb2xzZXRfcGF0aDogc3RyaW5nO1xyXG5cdG1ha2VfcGF0aDogc3RyaW5nO1xyXG5cdG1vZHVsZV9uYW1lOiBzdHJpbmc7XHJcblx0bW9kdWxlX3BhdGg6IHN0cmluZztcclxuXHRyZW1vdGVfcGF0aDogc3RyaW5nO1xyXG5cdHBhY2thZ2VfbmFtZTogc3RyaW5nO1xyXG5cdGhvc3Q6IHN0cmluZztcclxuXHRob3N0ZWRfcGF0aDogc3RyaW5nO1xyXG5cdGhvc3RlZF90YXJiYWxsOiBzdHJpbmc7XHJcblx0c3RhZ2VkX3RhcmJhbGw6IHN0cmluZztcclxuXHRyb290X2Rpcjogc3RyaW5nO1xyXG5cdG1ldGhvZDogc3RyaW5nO1xyXG5cdGZvcm06IGJvb2xlYW47XHJcblx0W2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAoZXJyb3IpID0+IHtcclxuXHRjb25zb2xlLmVycm9yKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnJvcik7XHJcblx0cHJvY2Vzcy5leGl0KDEpOyAvLyBUbyBleGl0IHdpdGggYSAnZmFpbHVyZScgY29kZVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlnKCk6IENvbmZpZ09iamVjdCB7XHJcblx0Y29uc3QgcGtnID0gcmVxdWlyZShgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlLmpzb25gKTtcclxuXHRsZXQgZW52ID0gcHJvY2Vzcy5lbnY7XHJcblx0bGV0IGNvbmZpZyA9IHtcclxuXHRcdG5hbWU6IHBrZy5uYW1lLFxyXG5cdFx0Y29uZmlndXJhdGlvbjogZW52LmJ1aWxkX3R5cGUgfHwgJ1JlbGVhc2UnLFxyXG5cdFx0ZXh0ZXJuYWw6IFtdLFxyXG5cdFx0dmVyc2lvbjogcGtnLnZlcnNpb24sXHJcblx0XHRwbGF0Zm9ybTogcGxhdF9mb3JtYXQoZW52LnBsYXRmb3JtIHx8IHByb2Nlc3MucGxhdGZvcm0pLFxyXG5cdFx0YXJjaDogYXJjaF9mb3JtYXQoZW52LmFyY2ggfHwgcHJvY2Vzcy5hcmNoKSxcclxuXHRcdGJ1aWxkX2NtZDogW10sXHJcblx0XHR0b29sc2V0X3BhdGg6IGVudi50b29sc2V0X3BhdGggfHwgJycsXHJcblx0XHRtYWtlX3BhdGg6IGVudi5tYWtlX3BhdGggfHwgJ21ha2UnLFxyXG5cdFx0bW9kdWxlX25hbWU6IHBrZy5uYW1lLFxyXG5cdFx0bW9kdWxlX3BhdGg6ICdidWlsZCcsXHJcblx0XHRyZW1vdGVfcGF0aDogJ3JlcGVydG9yeS9jeGIvJyxcclxuXHRcdHBhY2thZ2VfbmFtZTogJycsXHJcblx0XHRob3N0OiAnJyxcclxuXHRcdGhvc3RlZF9wYXRoOiAnJyxcclxuXHRcdGhvc3RlZF90YXJiYWxsOiAnJyxcclxuXHRcdHN0YWdlZF90YXJiYWxsOiAnJyxcclxuXHRcdG1ldGhvZDogJ3B1dCcsXHJcblx0XHRmb3JtOiBmYWxzZSxcclxuXHRcdHJvb3RfZGlyOiBwcm9jZXNzLmN3ZCgpXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3B0czogQ29uZmlnT2JqZWN0ID0gcmVxdWlyZShgJHtjb25maWcucm9vdF9kaXJ9L2N4Yi5jb25maWcuanNgKShjb25maWcpO1xyXG5cdG1lcmdlQ29uZmlnKGNvbmZpZywgb3B0cyk7XHJcblx0Y29uZmlnLmhvc3RlZF9wYXRoID0gdXJsLnJlc29sdmUoY29uZmlnLmhvc3QsIGNvbmZpZy5yZW1vdGVfcGF0aCk7XHJcblx0Y29uZmlnLmhvc3RlZF90YXJiYWxsID0gdXJsLnJlc29sdmUoY29uZmlnLmhvc3RlZF9wYXRoLCBjb25maWcucGFja2FnZV9uYW1lKTtcclxuXHRyZXR1cm4gY29uZmlnO1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzogQ29uZmlnT2JqZWN0LCBvcHRzOiBDb25maWdPYmplY3QpIHtcclxuXHRmb3IgKGNvbnN0IGtleSBpbiBvcHRzKSB7XHJcblx0XHRpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdGNvbmZpZ1trZXldID0gb3B0c1trZXldO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bihhcmd2OiBhbnkpIHtcclxuXHRhd2FpdCBkaXN0LmVuc3VyZURvd25sb2FkZWQoKTtcclxuXHRpZiAodXNhZ2UoYXJndikpIHJldHVybiAtMTtcclxuXHRsZXQgY29uZmlnID0gaW5pdENvbmZpZygpO1xyXG5cdGlmIChhcmd2LmIgfHwgYXJndi5idWlsZCkge1xyXG5cdFx0YXdhaXQgYnVpbGQoY29uZmlnKTtcclxuXHR9IGVsc2UgaWYgKGFyZ3YuaSB8fCBhcmd2Lmluc3RhbGwpIHtcclxuXHRcdGxldCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cdFx0bGV0IHIgPSBjd2QuaW5kZXhPZignbm9kZV9tb2R1bGVzJyk7XHJcblx0XHRpZiAociA8IDApIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Rvbm90IGluc3RhbGwgd2hlbiBwcm9jZXNzLmN3ZCBpbiB0aGlzIHByb2plY3QhISEnKTtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhd2FpdCBpbnN0YWxsKGNvbmZpZyk7XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmIChhcmd2LnAgfHwgYXJndi5wYWNrKSB7XHJcblx0XHRhd2FpdCBwYWNrKGNvbmZpZyk7XHJcblx0fSBlbHNlIGlmIChhcmd2LnIgfHwgYXJndi5yZWxlYXNlKSB7XHJcblx0XHRhd2FpdCByZWxlYXNlKGNvbmZpZyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKCdjeGI6IHNob3cgaGVscCB3aXRoIC0taGVscCcpO1xyXG5cdFx0cmV0dXJuIC0yO1xyXG5cdH1cclxuXHRyZXR1cm4gMDtcclxuXHQvL2luc3RhbGwoJ2h0dHBzOi8vcGFzc29hLWdlbmVyaWMucGtnLmNvZGluZy5uZXQvbGliYnQvbGliYnQvbWFzdGVyP3ZlcnNpb249bGF0ZXN0JywgJycpO1xyXG59XHJcbmZ1bmN0aW9uIHVzYWdlKGFyZ3Y6IGFueSkge1xyXG5cdGxldCBoZWxwID0gYXJndi5oIHx8IGFyZ3YuaGVscDtcclxuXHRpZiAoaGVscCkge1xyXG5cdFx0Ly8gSWYgdGhleSBkaWRuJ3QgYXNrIGZvciBoZWxwLCB0aGVuIHRoaXMgaXMgbm90IGEgXCJzdWNjZXNzXCJcclxuXHRcdHZhciBsb2cgPSBoZWxwID8gY29uc29sZS5sb2cgOiBjb25zb2xlLmVycm9yO1xyXG5cdFx0bG9nKCdVc2FnZTogcG0gPG1vZHVsZXM+IFs8T3B0aW9ucz4gLi4uXScpO1xyXG5cdFx0bG9nKCcnKTtcclxuXHRcdGxvZygnICBpbnN0YWxsIG5hdGl2ZSBtb2R1bGVzQHBhc3NvYScpO1xyXG5cdFx0bG9nKCcnKTtcclxuXHRcdGxvZygnT3B0aW9uczonKTtcclxuXHRcdGxvZygnJyk7XHJcblx0XHRsb2coJyAgLWgsIC0taGVscCAgICAgRGlzcGxheSB0aGlzIHVzYWdlIGluZm8nKTtcclxuXHRcdGxvZygnICAtYiwgLS1idWlsZCAgIGJ1aWxkIGNwcCBmb3IgcHJvamVjdCcpO1xyXG5cdFx0bG9nKCcgIC1yLCAtLXJlbGVhc2UgICByZWxlYXNlIG5vZGUgdGd6IGZvciBwcm9qZWN0Jyk7XHJcblx0XHRsb2coJyAgLWksIC0taW5zdGFsbCAgIGluc3RhbGwgY3BwIG1vZHVsZShpdCB3aWxsIGJ1aWxkIGNwcCBtb2R1bGUgaWYgY291bGQgbm90IGRvd25sb2FkIGZyb20gcmVtb3RlKScpO1xyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHRyZXR1cm4gMDtcclxufVxyXG5mdW5jdGlvbiBldmFsX3RlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcsIG9wdHM6IGFueSkge1xyXG5cdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFx7KFthLXpBLVowLTlfLV0rKVxcfS9nLCAoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nID0+IHtcclxuXHRcdGxldCBrZXkgPSBvcHRzW2FyZ3NbMF1dIHx8IHByb2Nlc3MuZW52W2FyZ3NbMF1dIHx8ICd1bmRlZmluZWQnO1xyXG5cdFx0cmV0dXJuIGtleTtcclxuXHR9KTtcclxuXHQvLyBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdC8vIFx0dmFyIHBhdHRlcm4gPSAneycgKyBrZXkgKyAnfSc7XHJcblx0Ly8gXHR3aGlsZSAodGVtcGxhdGUuaW5kZXhPZihwYXR0ZXJuKSA+IC0xKSB7XHJcblx0Ly8gXHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCBvcHRzW2tleV0pO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH0pO1xyXG5cdHJldHVybiB0ZW1wbGF0ZTtcclxufVxyXG5cclxuLy8gdXJsLnJlc29sdmUgbmVlZHMgc2luZ2xlIHRyYWlsaW5nIHNsYXNoXHJcbi8vIHRvIGJlaGF2ZSBjb3JyZWN0bHksIG90aGVyd2lzZSBhIGRvdWJsZSBzbGFzaFxyXG4vLyBtYXkgZW5kIHVwIGluIHRoZSB1cmwgd2hpY2ggYnJlYWtzIHJlcXVlc3RzXHJcbi8vIGFuZCBhIGxhY2tpbmcgc2xhc2ggbWF5IG5vdCBsZWFkIHRvIHByb3BlciBqb2luaW5nXHJcbmZ1bmN0aW9uIGZpeF9zbGFzaGVzKHBhdGhuYW1lOiBzdHJpbmcpIHtcclxuXHRpZiAocGF0aG5hbWUuc2xpY2UoLTEpICE9ICcvJykge1xyXG5cdFx0cmV0dXJuIHBhdGhuYW1lICsgJy8nO1xyXG5cdH1cclxuXHRyZXR1cm4gcGF0aG5hbWU7XHJcbn1cclxuXHJcbi8vIHJlbW92ZSBkb3VibGUgc2xhc2hlc1xyXG4vLyBub3RlOiBwYXRoLm5vcm1hbGl6ZSB3aWxsIG5vdCB3b3JrIGJlY2F1c2VcclxuLy8gaXQgd2lsbCBjb252ZXJ0IGZvcndhcmQgdG8gYmFjayBzbGFzaGVzXHJcbmZ1bmN0aW9uIGRyb3BfZG91YmxlX3NsYXNoZXMocGF0aG5hbWU6IHN0cmluZykge1xyXG5cdHJldHVybiBwYXRobmFtZS5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhdF9mb3JtYXQocGxhdDogc3RyaW5nKSB7XHJcblx0c3dpdGNoIChwbGF0KSB7XHJcblx0XHRjYXNlICd3aW4zMic6XHJcblx0XHRjYXNlICd3aW5kb3dzJzpcclxuXHRcdFx0cmV0dXJuICd3aW5kb3dzJztcclxuXHR9XHJcblx0cmV0dXJuIHBsYXQ7XHJcbn1cclxuZnVuY3Rpb24gYXJjaF9mb3JtYXQoYXJjaDogc3RyaW5nKSB7XHJcblx0c3dpdGNoIChhcmNoKSB7XHJcblx0XHRjYXNlICdpYTMyJzpcclxuXHRcdGNhc2UgJ3gzMic6XHJcblx0XHRjYXNlICd4ODYnOlxyXG5cdFx0XHRyZXR1cm4gJ3g4Nic7XHJcblx0XHRjYXNlICd4ODZfNjQnOlxyXG5cdFx0Y2FzZSAneDY0JzpcclxuXHRcdFx0cmV0dXJuICd4NjQnO1xyXG5cdH1cclxuXHRyZXR1cm4gYXJjaDtcclxufVxyXG5mdW5jdGlvbiBpc1N0cmluZ0FycmF5KGFycjogYW55W10pIHtcclxuXHRmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGFycikge1xyXG5cdFx0aWYgKHR5cGVvZiBpdGVyYXRvciAhPSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc1N0cmluZ0FycmF5MihhcnI6IGFueVtdKSB7XHJcblx0Zm9yIChjb25zdCBpdGVyYXRvciBvZiBhcnIpIHtcclxuXHRcdGlmICghQXJyYXkuaXNBcnJheShpdGVyYXRvcikgJiYgIWlzU3RyaW5nQXJyYXkoaXRlcmF0b3IpKSByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGFkZERlZmF1bHRDbWQoYmM6IHN0cmluZ1tdLCBjb25maWc6IENvbmZpZ09iamVjdCkge1xyXG5cdGxldCBpbmNQYXRocztcclxuXHRpZiAoZGlzdC5oZWFkZXJPbmx5KSB7XHJcblx0XHRpbmNQYXRocyA9IFsgcGF0aC5qb2luKGRpc3QuaW50ZXJuYWxQYXRoLCAnL2luY2x1ZGUvbm9kZScpIF07XHJcblx0fSBlbHNlIHtcclxuXHRcdGxldCBub2RlSCA9IHBhdGguam9pbihkaXN0LmludGVybmFsUGF0aCwgJy9zcmMnKTtcclxuXHRcdGxldCB2OEggPSBwYXRoLmpvaW4oZGlzdC5pbnRlcm5hbFBhdGgsICcvZGVwcy92OC9pbmNsdWRlJyk7XHJcblx0XHRsZXQgdXZIID0gcGF0aC5qb2luKGRpc3QuaW50ZXJuYWxQYXRoLCAnL2RlcHMvdXYvaW5jbHVkZScpO1xyXG5cdFx0aW5jUGF0aHMgPSBbIG5vZGVILCB2OEgsIHV2SCBdO1xyXG5cdH1cclxuXHQvLyBJbmNsdWRlczpcclxuXHRiYy5wdXNoKGAtRENNQUtFX0pTX0lOQz0ke2luY1BhdGhzLmpvaW4oJzsnKX1gKTtcclxuXHRpZiAoZW52aXJvbm1lbnQuaXNXaW4pIHtcclxuXHRcdC8vIFdpblxyXG5cdFx0bGV0IGxpYnMgPSBkaXN0LndpbkxpYnM7XHJcblx0XHRpZiAobGlicy5sZW5ndGgpIHtcclxuXHRcdFx0YmMucHVzaChgLURDTUFLRV9KU19MSUI9JHtsaWJzLmpvaW4oJzsnKX1gKTtcclxuXHRcdH1cclxuXHR9XHJcblx0YmMucHVzaChgLURDWEJfTU9EVUxFX0RJU1Q9JHtjb25maWcucm9vdF9kaXJ9LyR7Y29uZmlnLm1vZHVsZV9wYXRofWApO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkQnlTdHJpbmdBcnJheShidWlsZF9zdHI6IHN0cmluZywgY29uZmlnOiBDb25maWdPYmplY3QsIGJjOiBzdHJpbmdbXSkge1xyXG5cdGZvciAoY29uc3Qga2V5IGluIGJjKSB7XHJcblx0XHRpZiAoYmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gYmNba2V5XTtcclxuXHRcdFx0YmNba2V5XSA9IGV2YWxfdGVtcGxhdGUoZWxlbWVudCwgY29uZmlnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZzLmVtcHR5RGlyU3luYyhgdG1wLyR7YnVpbGRfc3RyfWApO1xyXG5cdHByb2Nlc3MuY2hkaXIoYHRtcC8ke2J1aWxkX3N0cn1gKTtcclxuXHJcblx0YmMgPSBbICcuLi8uLi8nIF0uY29uY2F0KGJjKTtcclxuXHRhZGREZWZhdWx0Q21kKGJjLCBjb25maWcpO1xyXG5cdGNvbnNvbGUubG9nKGJjKTtcclxuXHJcblx0bGV0IHIgPSBjcC5zcGF3blN5bmMoJ2NtYWtlJywgYmMsIHsgc3RkaW86ICdpbmhlcml0JyB9KTtcclxuXHRpZiAoci5zdGF0dXMpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignY21ha2UgZ2VuZXJhdG9yIGZhaWxzJyk7XHJcblx0fVxyXG5cdHIgPSBjcC5zcGF3blN5bmMoJ2NtYWtlJywgWyAnLS1idWlsZCcsICcuLycsICctLWNvbmZpZycsIGNvbmZpZy5jb25maWd1cmF0aW9uIF0sIHsgc3RkaW86ICdpbmhlcml0JyB9KTtcclxuXHRpZiAoci5zdGF0dXMpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignY21ha2UgYnVpbGQgZmFpbHMnKTtcclxuXHR9XHJcblx0cHJvY2Vzcy5jaGRpcignLi4vLi4vJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZChjb25maWc6IENvbmZpZ09iamVjdCkge1xyXG5cdGlmIChjb25maWcuZXh0ZXJuYWwpIHtcclxuXHRcdGxldCB0YXNrMSA9IG5ldyBBcnJheTxpZkt5PigpLFxyXG5cdFx0XHR0YXNrMiA9IG5ldyBBcnJheTxpZkt5PigpO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gY29uZmlnLmV4dGVybmFsKSB7XHJcblx0XHRcdGlmIChjb25maWcuZXh0ZXJuYWwuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdGNvbnN0IG9iaiA9IGNvbmZpZy5leHRlcm5hbFtrZXldO1xyXG5cdFx0XHRcdGxldCB1cmwgPSAnJztcclxuXHRcdFx0XHRpZiAoaXNBcnJheShvYmopKSB7XHJcblx0XHRcdFx0XHR1cmwgPSBvYmpbMF07XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpc1N0cmluZyhvYmopKSB7XHJcblx0XHRcdFx0XHR1cmwgPSBvYmo7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignY3hiLmV4dGVybmFsIGNvbmZpZyBoYXMgZXJyb3InKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHRtcCA9IGAke2NvbmZpZy5yb290X2Rpcn0vdG1wL3N0YWdlLyR7a2V5fS8ke3BhdGguYmFzZW5hbWUodXJsKX1gO1xyXG5cdFx0XHRcdGxldCBkc3QgPSBwYXRoLmpvaW4oYCR7Y29uZmlnLnJvb3RfZGlyfS8zcmRgLCBrZXkpO1xyXG5cclxuXHRcdFx0XHRpZiAoZnMuZXhpc3RzU3luYyhkc3QpKSB7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2codXJsLCB0bXApO1xyXG5cdFx0XHRcdHRhc2sxLnB1c2goeyBzcmM6IHVybCwgZHN0OiB0bXAgfSk7XHJcblx0XHRcdFx0dGFzazIucHVzaCh7IHNyYzogdG1wLCBkc3Q6IGRzdCwgb3B0aW9uOiB7IHN0cmlwOiBvYmpbMV0gfSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0YXdhaXQgZG93bmxvYWRlci5kb3dubG9hZEFsbCh0YXNrMSk7XHJcblx0XHRhd2FpdCBkb3dubG9hZGVyLnVuemlwQWxsKHRhc2syKTtcclxuXHR9XHJcblx0aWYgKGNvbmZpZy5idWlsZF9jbWQpIHtcclxuXHRcdGxldCBidWlsZF9zdHIgPSBgJHtjb25maWcucGxhdGZvcm19XyR7Y29uZmlnLmFyY2h9YDtcclxuXHRcdGxldCBiYyA9IGNvbmZpZy5idWlsZF9jbWRbYnVpbGRfc3RyXTtcclxuXHRcdGlmICghYmMpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBwbGVhc2UgY2hlY2sgeW91ciBjb25maWcgZm9yICR7YnVpbGRfc3RyfWApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYmMpKSB7XHJcblx0XHRcdGlmIChpc1N0cmluZ0FycmF5KGJjKSkge1xyXG5cdFx0XHRcdGJ1aWxkQnlTdHJpbmdBcnJheShidWlsZF9zdHIsIGNvbmZpZywgYmMpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzU3RyaW5nQXJyYXkyKGJjKSkge1xyXG5cdFx0XHRcdGxldCBpZHggPSAwO1xyXG5cdFx0XHRcdGZvciAoY29uc3QgaXRlcmF0b3Igb2YgYmMpIHtcclxuXHRcdFx0XHRcdGJ1aWxkQnlTdHJpbmdBcnJheShgJHtidWlsZF9zdHJ9XyR7aWR4Kyt9YCwgY29uZmlnLCBpdGVyYXRvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgcGxlYXNlIGNoZWNrIHlvdXIgY29uZmlnIGZvciAke2J1aWxkX3N0cn1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2J1aWxkX2NtZCBoYXMgbm90IGluIGN4Yi5jb25maWcuanMnKTtcclxuXHR9XHJcblx0cmV0dXJuIDA7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbGwoY29uZmlnOiBDb25maWdPYmplY3QpIHtcclxuXHRsZXQgdGFyYmFsbCA9IGAke2NvbmZpZy5tb2R1bGVfbmFtZX0tdiR7Y29uZmlnLnZlcnNpb259LSR7Y29uZmlnLnBsYXRmb3JtfS0ke2NvbmZpZy5hcmNofS50YXIuZ3pgO1xyXG5cdGNvbmZpZy5zdGFnZWRfdGFyYmFsbCA9IHBhdGguam9pbigndG1wL3N0YWdlJywgdGFyYmFsbCk7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IGRvd25sb2FkZXIuZG93bmxvYWRBbGwoWyB7IHNyYzogY29uZmlnLmhvc3RlZF90YXJiYWxsLCBkc3Q6IGNvbmZpZy5zdGFnZWRfdGFyYmFsbCB9IF0pO1xyXG5cdFx0YXdhaXQgZG93bmxvYWRlci51bnppcEFsbChbIHsgc3JjOiBjb25maWcuc3RhZ2VkX3RhcmJhbGwsIGRzdDogJy4vJyB9IF0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG5cdFx0cmV0dXJuIGJ1aWxkKGNvbmZpZyk7XHJcblx0fVxyXG5cdHJldHVybiAwO1xyXG5cdC8vIGlmIChhd2FpdCBkb3dubG9hZChjb25maWcuaG9zdGVkX3RhcmJhbGwsIGNvbmZpZy5zdGFnZWRfdGFyYmFsbCkpIHtcclxuXHQvLyBcdGZzLnJlbW92ZVN5bmMoY29uZmlnLnN0YWdlZF90YXJiYWxsKTtcclxuXHQvLyBcdHRocm93IG5ldyBFcnJvcihgZG93bmxvYWQgJHtjb25maWcuaG9zdGVkX3RhcmJhbGx9IGVycm9yIGluIGluc3RhbGxgKTtcclxuXHQvLyB9XHJcblx0Ly8gaWYgKGF3YWl0IHVuY29tcHJlc3MoY29uZmlnLnN0YWdlZF90YXJiYWxsLCBjb25maWcubW9kdWxlX3BhdGgpKSB7XHJcblx0Ly8gXHRmcy5yZW1vdmVTeW5jKGNvbmZpZy5zdGFnZWRfdGFyYmFsbCk7XHJcblx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoYHVuY29tcHJlc3MgJHtjb25maWcuc3RhZ2VkX3RhcmJhbGx9IGVycm9yIGluIGluc3RhbGxgKTtcclxuXHQvLyB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbGVhc2UoY29uZmlnOiBDb25maWdPYmplY3QpIHtcclxuXHRsZXQgdXAgPSBuZXcgVXBsb2FkZXIoKTtcclxuXHRsZXQgc3JjID0gcGF0aC5qb2luKGNvbmZpZy5yb290X2RpciwgY29uZmlnLm1vZHVsZV9wYXRoKTtcclxuXHRjb25maWcuc3RhZ2VkX3RhcmJhbGwgPSBwYXRoLmpvaW4oY29uZmlnLnJvb3RfZGlyLCBgdG1wLyR7Y29uZmlnLm1vZHVsZV9uYW1lfS50YXIuZ3pgKTtcclxuXHRhd2FpdCB1cC5wYWNrVGd6KHNyYywgY29uZmlnLnN0YWdlZF90YXJiYWxsKTtcclxuXHRsZXQgZW52ID0gcHJvY2Vzcy5lbnY7XHJcblx0Y29uZmlnLnRva2VuID0gQnVmZmVyLmZyb20oYCR7ZW52LkNYQlVTRVJOQU1FfToke2Vudi5DWEJQQVNTV09SRH1gLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuXHRhd2FpdCB1cC51cGxvYWQoY29uZmlnLmhvc3RlZF90YXJiYWxsLCBjb25maWcuc3RhZ2VkX3RhcmJhbGwsIGNvbmZpZy50b2tlbiwge1xyXG5cdFx0bWV0aG9kOiBjb25maWcubWV0aG9kLFxyXG5cdFx0Zm9ybTogY29uZmlnLmZvcm1cclxuXHR9KTtcclxuXHRyZXR1cm4gMDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFjayhjb25maWc6IENvbmZpZ09iamVjdCkge1xyXG5cdGxldCB1cCA9IG5ldyBVcGxvYWRlcigpO1xyXG5cdGxldCBzcmMgPSBwYXRoLmpvaW4oY29uZmlnLnJvb3RfZGlyLCBjb25maWcubW9kdWxlX3BhdGgpO1xyXG5cdGNvbmZpZy5zdGFnZWRfdGFyYmFsbCA9IHBhdGguam9pbihjb25maWcucm9vdF9kaXIsIGB0bXAvJHtjb25maWcubW9kdWxlX25hbWV9LnRhci5nemApO1xyXG5cdHJldHVybiBhd2FpdCB1cC5wYWNrVGd6KHNyYywgY29uZmlnLnN0YWdlZF90YXJiYWxsKTtcclxufVxyXG4iXX0=
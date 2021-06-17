"use strict";
// import { ConnectionOptions } from 'typeorm';
// import { connect } from './connect';
// import { projectApi } from './api/project.api';
// import { versionApi } from './api/version.api';
// import { caseApi } from './api/case.api';
// import { autoApi } from './api/auto.api';
Object.defineProperty(exports, "__esModule", { value: true });
var connect_1 = require("./connect");
exports.connect = connect_1.connect;
var project_api_1 = require("./api/project.api");
exports.projectApi = project_api_1.projectApi;
var version_api_1 = require("./api/version.api");
exports.versionApi = version_api_1.versionApi;
var case_api_1 = require("./api/case.api");
exports.caseApi = case_api_1.caseApi;
var auto_api_1 = require("./api/auto.api");
exports.autoApi = auto_api_1.autoApi;
var user_api_1 = require("./api/user.api");
exports.userApi = user_api_1.userApi;
var image_api_1 = require("./api/image.api");
exports.imageApi = image_api_1.imageApi;
var result_api_1 = require("./api/result.api");
exports.resultApi = result_api_1.resultApi;
var dbc_api_1 = require("./api/dbc.api");
exports.dbcApi = dbc_api_1.dbcApi;
var email_notify_api_1 = require("./api/email_notify.api");
exports.emailApi = email_notify_api_1.emailApi;
var after_ng_api_1 = require("./api/after_ng.api");
exports.afterNgApi = after_ng_api_1.afterNgApi;
// connection settings are in the "ormconfig.json" file
// let pgconfig: ConnectionOptions = {
// 	type: 'postgres',
// 	host: 'localhost',
// 	port: 5432,
// 	username: 'postgres',
// 	password: '123456',
// 	database: 'flow',
// 	entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
// 	// logging: 'all',
// 	// logger: 'file',
// 	synchronize: true
// };
// let sqliteconfig: ConnectionOptions = {
// 	type: 'sqlite',
// 	database: 'test.sqlite',
// 	entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
// 	synchronize: true
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyx1Q0FBdUM7QUFDdkMsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCw0Q0FBNEM7QUFDNUMsNENBQTRDOztBQUU1QyxxQ0FBb0M7QUFBM0IsNEJBQUEsT0FBTyxDQUFBO0FBQ2hCLGlEQUErQztBQUF0QyxtQ0FBQSxVQUFVLENBQUE7QUFDbkIsaURBQStDO0FBQXRDLG1DQUFBLFVBQVUsQ0FBQTtBQUNuQiwyQ0FBeUM7QUFBaEMsNkJBQUEsT0FBTyxDQUFBO0FBQ2hCLDJDQUF5QztBQUFoQyw2QkFBQSxPQUFPLENBQUE7QUFDaEIsMkNBQXlDO0FBQWhDLDZCQUFBLE9BQU8sQ0FBQTtBQUNoQiw2Q0FBMkM7QUFBbEMsK0JBQUEsUUFBUSxDQUFBO0FBQ2pCLCtDQUE2QztBQUFwQyxpQ0FBQSxTQUFTLENBQUE7QUFDbEIseUNBQXVDO0FBQTlCLDJCQUFBLE1BQU0sQ0FBQTtBQUNmLDJEQUFrRDtBQUF6QyxzQ0FBQSxRQUFRLENBQUE7QUFDakIsbURBQWdEO0FBQXZDLG9DQUFBLFVBQVUsQ0FBQTtBQUVuQix1REFBdUQ7QUFDdkQsc0NBQXNDO0FBQ3RDLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLHNEQUFzRDtBQUN0RCxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixLQUFLO0FBQ0wsMENBQTBDO0FBQzFDLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsc0RBQXNEO0FBQ3RELHFCQUFxQjtBQUNyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tICd0eXBlb3JtJztcclxuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4vY29ubmVjdCc7XHJcbi8vIGltcG9ydCB7IHByb2plY3RBcGkgfSBmcm9tICcuL2FwaS9wcm9qZWN0LmFwaSc7XHJcbi8vIGltcG9ydCB7IHZlcnNpb25BcGkgfSBmcm9tICcuL2FwaS92ZXJzaW9uLmFwaSc7XHJcbi8vIGltcG9ydCB7IGNhc2VBcGkgfSBmcm9tICcuL2FwaS9jYXNlLmFwaSc7XHJcbi8vIGltcG9ydCB7IGF1dG9BcGkgfSBmcm9tICcuL2FwaS9hdXRvLmFwaSc7XHJcblxyXG5leHBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25uZWN0JztcclxuZXhwb3J0IHsgcHJvamVjdEFwaSB9IGZyb20gJy4vYXBpL3Byb2plY3QuYXBpJztcclxuZXhwb3J0IHsgdmVyc2lvbkFwaSB9IGZyb20gJy4vYXBpL3ZlcnNpb24uYXBpJztcclxuZXhwb3J0IHsgY2FzZUFwaSB9IGZyb20gJy4vYXBpL2Nhc2UuYXBpJztcclxuZXhwb3J0IHsgYXV0b0FwaSB9IGZyb20gJy4vYXBpL2F1dG8uYXBpJztcclxuZXhwb3J0IHsgdXNlckFwaSB9IGZyb20gJy4vYXBpL3VzZXIuYXBpJztcclxuZXhwb3J0IHsgaW1hZ2VBcGkgfSBmcm9tICcuL2FwaS9pbWFnZS5hcGknO1xyXG5leHBvcnQgeyByZXN1bHRBcGkgfSBmcm9tICcuL2FwaS9yZXN1bHQuYXBpJztcclxuZXhwb3J0IHsgZGJjQXBpIH0gZnJvbSAnLi9hcGkvZGJjLmFwaSc7XHJcbmV4cG9ydCB7IGVtYWlsQXBpIH0gZnJvbSAnLi9hcGkvZW1haWxfbm90aWZ5LmFwaSc7XHJcbmV4cG9ydCB7IGFmdGVyTmdBcGkgfSBmcm9tICcuL2FwaS9hZnRlcl9uZy5hcGknO1xyXG5leHBvcnQgeyBDb25uZWN0aW9uT3B0aW9ucyB9IGZyb20gJ3R5cGVvcm0nO1xyXG4vLyBjb25uZWN0aW9uIHNldHRpbmdzIGFyZSBpbiB0aGUgXCJvcm1jb25maWcuanNvblwiIGZpbGVcclxuLy8gbGV0IHBnY29uZmlnOiBDb25uZWN0aW9uT3B0aW9ucyA9IHtcclxuLy8gXHR0eXBlOiAncG9zdGdyZXMnLFxyXG4vLyBcdGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4vLyBcdHBvcnQ6IDU0MzIsXHJcbi8vIFx0dXNlcm5hbWU6ICdwb3N0Z3JlcycsXHJcbi8vIFx0cGFzc3dvcmQ6ICcxMjM0NTYnLFxyXG4vLyBcdGRhdGFiYXNlOiAnZmxvdycsXHJcbi8vIFx0ZW50aXRpZXM6IFsgX19kaXJuYW1lICsgJy8qKi8qLmVudGl0eXsudHMsLmpzfScgXSxcclxuLy8gXHQvLyBsb2dnaW5nOiAnYWxsJyxcclxuLy8gXHQvLyBsb2dnZXI6ICdmaWxlJyxcclxuLy8gXHRzeW5jaHJvbml6ZTogdHJ1ZVxyXG4vLyB9O1xyXG4vLyBsZXQgc3FsaXRlY29uZmlnOiBDb25uZWN0aW9uT3B0aW9ucyA9IHtcclxuLy8gXHR0eXBlOiAnc3FsaXRlJyxcclxuLy8gXHRkYXRhYmFzZTogJ3Rlc3Quc3FsaXRlJyxcclxuLy8gXHRlbnRpdGllczogWyBfX2Rpcm5hbWUgKyAnLyoqLyouZW50aXR5ey50cywuanN9JyBdLFxyXG4vLyBcdHN5bmNocm9uaXplOiB0cnVlXHJcbi8vIH07XHJcbiJdfQ==
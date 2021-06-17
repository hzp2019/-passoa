"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var semver = require('semver');
var NODE_MIRROR = process.env.NVM_NODEJS_ORG_MIRROR || 'https://nodejs.org/dist';
var IOJS_MIRROR = process.env.NVM_IOJS_ORG_MIRROR || 'https://iojs.org/dist';
var ELECTRON_MIRROR = process.env.ELECTRON_MIRROR || 'https://atom.io/download/atom-shell';
exports.runtimePaths = {
    node: function (targetOptions) {
        if (semver.lt(targetOptions.runtimeVersion, '4.0.0')) {
            return {
                externalPath: NODE_MIRROR + '/v' + targetOptions.runtimeVersion + '/',
                winLibs: [
                    {
                        dir: targetOptions.isX64 ? 'x64' : '',
                        name: targetOptions.runtime + '.lib'
                    }
                ],
                tarPath: targetOptions.runtime + '-v' + targetOptions.runtimeVersion + '.tar.gz',
                headerOnly: false
            };
        }
        else {
            return {
                externalPath: NODE_MIRROR + '/v' + targetOptions.runtimeVersion + '/',
                winLibs: [
                    {
                        dir: targetOptions.isX64 ? 'win-x64' : 'win-x86',
                        name: targetOptions.runtime + '.lib'
                    }
                ],
                tarPath: targetOptions.runtime + '-v' + targetOptions.runtimeVersion + '-headers.tar.gz',
                headerOnly: true
            };
        }
    },
    iojs: function (targetOptions) {
        return {
            externalPath: IOJS_MIRROR + '/v' + targetOptions.runtimeVersion + '/',
            winLibs: [
                {
                    dir: targetOptions.isX64 ? 'win-x64' : 'win-x86',
                    name: targetOptions.runtime + '.lib'
                }
            ],
            tarPath: targetOptions.runtime + '-v' + targetOptions.runtimeVersion + '.tar.gz',
            headerOnly: false
        };
    },
    nw: function (targetOptions) {
        if (semver.gte(targetOptions.runtimeVersion, '0.13.0')) {
            return {
                externalPath: 'https://node-webkit.s3.amazonaws.com/v' + targetOptions.runtimeVersion + '/',
                winLibs: [
                    {
                        dir: targetOptions.isX64 ? 'x64' : '',
                        name: targetOptions.runtime + '.lib'
                    },
                    {
                        dir: targetOptions.isX64 ? 'x64' : '',
                        name: 'node.lib'
                    }
                ],
                tarPath: 'nw-headers-v' + targetOptions.runtimeVersion + '.tar.gz',
                headerOnly: false
            };
        }
        return {
            externalPath: 'https://node-webkit.s3.amazonaws.com/v' + targetOptions.runtimeVersion + '/',
            winLibs: [
                {
                    dir: targetOptions.isX64 ? 'x64' : '',
                    name: targetOptions.runtime + '.lib'
                }
            ],
            tarPath: 'nw-headers-v' + targetOptions.runtimeVersion + '.tar.gz',
            headerOnly: false
        };
    },
    electron: function (targetOptions) {
        return {
            externalPath: ELECTRON_MIRROR + '/v' + targetOptions.runtimeVersion + '/',
            winLibs: [
                {
                    dir: targetOptions.isX64 ? 'x64' : '',
                    name: 'node.lib'
                }
            ],
            tarPath: 'node' + '-v' + targetOptions.runtimeVersion + '.tar.gz',
            headerOnly: semver.gte(targetOptions.runtimeVersion, '4.0.0-alpha')
        };
    },
    get: function (targetOptions) {
        var runtime = targetOptions.runtime;
        switch (runtime) {
            case 'electron':
                return this.electron(targetOptions);
            case 'node':
                return this.node(targetOptions);
            case 'iojs':
                return this.iojs(targetOptions);
            case 'nw':
                return this.nw(targetOptions);
            default:
                throw new Error('Unknown runtime: ' + runtime);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZVBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3J1bnRpbWVQYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUcvQixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixJQUFJLHlCQUF5QixDQUFDO0FBQ2pGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLElBQUksdUJBQXVCLENBQUM7QUFDN0UsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUkscUNBQXFDLENBQUM7QUFFaEYsUUFBQSxZQUFZLEdBQUc7SUFDekIsSUFBSSxFQUFFLFVBQVMsYUFBNEI7UUFDMUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDckQsT0FBTztnQkFDTixZQUFZLEVBQUUsV0FBVyxHQUFHLElBQUksR0FBRyxhQUFhLENBQUMsY0FBYyxHQUFHLEdBQUc7Z0JBQ3JFLE9BQU8sRUFBRTtvQkFDUjt3QkFDQyxHQUFHLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNyQyxJQUFJLEVBQUUsYUFBYSxDQUFDLE9BQU8sR0FBRyxNQUFNO3FCQUNwQztpQkFDRDtnQkFDRCxPQUFPLEVBQUUsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDLGNBQWMsR0FBRyxTQUFTO2dCQUNoRixVQUFVLEVBQUUsS0FBSzthQUNqQixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU87Z0JBQ04sWUFBWSxFQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDLGNBQWMsR0FBRyxHQUFHO2dCQUNyRSxPQUFPLEVBQUU7b0JBQ1I7d0JB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Q3pDLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDcEMsUUFBUSxPQUFPLEVBQUU7WUFDaEIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyQyxLQUFLLE1BQU07Z0JBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssTUFBTTtnQkFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsS0FBSyxJQUFJO2dCQUNSLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQztDQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2VtdmVyID0gcmVxdWlyZSgnc2VtdmVyJyk7XG5pbXBvcnQgeyBUYXJnZXRPcHRpb25zIH0gZnJvbSAnLi90YXJnZXRPcHRpb25zJztcblxubGV0IE5PREVfTUlSUk9SID0gcHJvY2Vzcy5lbnYuTlZNX05PREVKU19PUkdfTUlSUk9SIHx8ICdodHRwczovL25vZGVqcy5vcmcvZGlzdCc7XG5sZXQgSU9KU19NSVJST1IgPSBwcm9jZXNzLmVudi5OVk1fSU9KU19PUkdfTUlSUk9SIHx8ICdodHRwczovL2lvanMub3JnL2Rpc3QnO1xubGV0IEVMRUNUUk9OX01JUlJPUiA9IHByb2Nlc3MuZW52LkVMRUNUUk9OX01JUlJPUiB8fCAnaHR0cHM6Ly9hdG9tLmlvL2Rvd25sb2FkL2F0b20tc2hlbGwnO1xuXG5leHBvcnQgbGV0IHJ1bnRpbWVQYXRocyA9IHtcblx0bm9kZTogZnVuY3Rpb24odGFyZ2V0T3B0aW9uczogVGFyZ2V0T3B0aW9ucykge1xuXHRcdGlmIChzZW12ZXIubHQodGFyZ2V0T3B0aW9ucy5ydW50aW1lVmVyc2lvbiwgJzQuMC4wJykpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGV4dGVybmFsUGF0aDogTk9ERV9NSVJST1IgKyAnL3YnICsgdGFyZ2V0T3B0aW9ucy5ydW50aW1lVmVyc2lvbiArICcvJyxcblx0XHRcdFx0d2luTGliczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRpcjogdGFyZ2V0T3B0aW9ucy5pc1g2NCA/ICd4NjQnIDogJycsXG5cdFx0XHRcdFx0XHRuYW1lOiB0YXJnZXRPcHRpb25zLnJ1bnRpbWUgKyAnLmxpYidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdHRhclBhdGg6IHRhcmdldE9wdGlvbnMucnVudGltZSArICctdicgKyB0YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uICsgJy50YXIuZ3onLFxuXHRcdFx0XHRoZWFkZXJPbmx5OiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZXh0ZXJuYWxQYXRoOiBOT0RFX01JUlJPUiArICcvdicgKyB0YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uICsgJy8nLFxuXHRcdFx0XHR3aW5MaWJzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGlyOiB0YXJnZXRPcHRpb25zLmlzWDY0ID8gJ3dpbi14NjQnIDogJ3dpbi14ODYnLFxuXHRcdFx0XHRcdFx0bmFtZTogdGFyZ2V0T3B0aW9ucy5ydW50aW1lICsgJy5saWInXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHR0YXJQYXRoOiB0YXJnZXRPcHRpb25zLnJ1bnRpbWUgKyAnLXYnICsgdGFyZ2V0T3B0aW9ucy5ydW50aW1lVmVyc2lvbiArICctaGVhZGVycy50YXIuZ3onLFxuXHRcdFx0XHRoZWFkZXJPbmx5OiB0cnVlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSxcblx0aW9qczogZnVuY3Rpb24odGFyZ2V0T3B0aW9uczogVGFyZ2V0T3B0aW9ucykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRleHRlcm5hbFBhdGg6IElPSlNfTUlSUk9SICsgJy92JyArIHRhcmdldE9wdGlvbnMucnVudGltZVZlcnNpb24gKyAnLycsXG5cdFx0XHR3aW5MaWJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkaXI6IHRhcmdldE9wdGlvbnMuaXNYNjQgPyAnd2luLXg2NCcgOiAnd2luLXg4NicsXG5cdFx0XHRcdFx0bmFtZTogdGFyZ2V0T3B0aW9ucy5ydW50aW1lICsgJy5saWInXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHR0YXJQYXRoOiB0YXJnZXRPcHRpb25zLnJ1bnRpbWUgKyAnLXYnICsgdGFyZ2V0T3B0aW9ucy5ydW50aW1lVmVyc2lvbiArICcudGFyLmd6Jyxcblx0XHRcdGhlYWRlck9ubHk6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0bnc6IGZ1bmN0aW9uKHRhcmdldE9wdGlvbnM6IFRhcmdldE9wdGlvbnMpIHtcblx0XHRpZiAoc2VtdmVyLmd0ZSh0YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uLCAnMC4xMy4wJykpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGV4dGVybmFsUGF0aDogJ2h0dHBzOi8vbm9kZS13ZWJraXQuczMuYW1hem9uYXdzLmNvbS92JyArIHRhcmdldE9wdGlvbnMucnVudGltZVZlcnNpb24gKyAnLycsXG5cdFx0XHRcdHdpbkxpYnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkaXI6IHRhcmdldE9wdGlvbnMuaXNYNjQgPyAneDY0JyA6ICcnLFxuXHRcdFx0XHRcdFx0bmFtZTogdGFyZ2V0T3B0aW9ucy5ydW50aW1lICsgJy5saWInXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkaXI6IHRhcmdldE9wdGlvbnMuaXNYNjQgPyAneDY0JyA6ICcnLFxuXHRcdFx0XHRcdFx0bmFtZTogJ25vZGUubGliJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0dGFyUGF0aDogJ253LWhlYWRlcnMtdicgKyB0YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uICsgJy50YXIuZ3onLFxuXHRcdFx0XHRoZWFkZXJPbmx5OiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGV4dGVybmFsUGF0aDogJ2h0dHBzOi8vbm9kZS13ZWJraXQuczMuYW1hem9uYXdzLmNvbS92JyArIHRhcmdldE9wdGlvbnMucnVudGltZVZlcnNpb24gKyAnLycsXG5cdFx0XHR3aW5MaWJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkaXI6IHRhcmdldE9wdGlvbnMuaXNYNjQgPyAneDY0JyA6ICcnLFxuXHRcdFx0XHRcdG5hbWU6IHRhcmdldE9wdGlvbnMucnVudGltZSArICcubGliJ1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0dGFyUGF0aDogJ253LWhlYWRlcnMtdicgKyB0YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uICsgJy50YXIuZ3onLFxuXHRcdFx0aGVhZGVyT25seTogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRlbGVjdHJvbjogZnVuY3Rpb24odGFyZ2V0T3B0aW9uczogVGFyZ2V0T3B0aW9ucykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRleHRlcm5hbFBhdGg6IEVMRUNUUk9OX01JUlJPUiArICcvdicgKyB0YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uICsgJy8nLFxuXHRcdFx0d2luTGliczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGlyOiB0YXJnZXRPcHRpb25zLmlzWDY0ID8gJ3g2NCcgOiAnJyxcblx0XHRcdFx0XHRuYW1lOiAnbm9kZS5saWInXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHR0YXJQYXRoOiAnbm9kZScgKyAnLXYnICsgdGFyZ2V0T3B0aW9ucy5ydW50aW1lVmVyc2lvbiArICcudGFyLmd6Jyxcblx0XHRcdGhlYWRlck9ubHk6IHNlbXZlci5ndGUodGFyZ2V0T3B0aW9ucy5ydW50aW1lVmVyc2lvbiwgJzQuMC4wLWFscGhhJylcblx0XHR9O1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKHRhcmdldE9wdGlvbnM6IFRhcmdldE9wdGlvbnMpIHtcblx0XHRsZXQgcnVudGltZSA9IHRhcmdldE9wdGlvbnMucnVudGltZTtcblx0XHRzd2l0Y2ggKHJ1bnRpbWUpIHtcblx0XHRcdGNhc2UgJ2VsZWN0cm9uJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWxlY3Ryb24odGFyZ2V0T3B0aW9ucyk7XG5cdFx0XHRjYXNlICdub2RlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubm9kZSh0YXJnZXRPcHRpb25zKTtcblx0XHRcdGNhc2UgJ2lvanMnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pb2pzKHRhcmdldE9wdGlvbnMpO1xuXHRcdFx0Y2FzZSAnbncnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udyh0YXJnZXRPcHRpb25zKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBydW50aW1lOiAnICsgcnVudGltZSk7XG5cdFx0fVxuXHR9XG59O1xuIl19
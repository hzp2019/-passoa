module.exports = (opts) => {
	let module_name = 'sapi';
	let config = {
		module_name: module_name,
		module_path: 'build',
		remote_path: 'repertory/cxb/',
		package_name: `${module_name}.tar.gz?version=v${opts.version}-${opts.platform}-${opts.arch}`,
		host: 'https://passoa-generic.pkg.coding.net',
		external: {},
		build_cmd: {
			vc14_x64: [ '-G', 'Visual Studio 14 2015 Win64', '-DNODE=1' ],
			windows_x64: [ '-G', 'Visual Studio 15 2017 Win64', '-DNODE=1' ]
		}
	};
	return config;
};

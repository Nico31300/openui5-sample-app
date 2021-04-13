module.exports = function (config) {
	"use strict";

	var chromeFlags = ["--window-size=1280,1024"];

	config.set({
		frameworks: ["ui5"],

		ui5: {
			url: "https://sapui5.hana.ondemand.com",
			config: {
				async: true,
				resourceRoots: {
					"sap.ui.demo.todo": "./webapp",
				},
			},
		},

		proxies: {
			"/base/webapp": {
				target: "https://sapui5.hana.ondemand.com/1.71.35",
				changeOrigin: true,
			},
		},
		logLevel: config.LOG_DEBUG,

		browsers: ["CustomChrome"],

		browserConsoleLogOptions: {
			level: "error",
		},

		customLaunchers: {
			CustomChrome: {
				base: "Chrome",
				flags: chromeFlags,
			},
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: chromeFlags,
			},
		},
	});
};

const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS({
	webpack(config) {
        config.resolve.alias["services"] = path.join(__dirname, "services");
        config.resolve.alias["hooks"] = path.join(__dirname, "hooks");
		return config;
	}
});

import App from "next/app";
import Head from "next/head";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "services/shared/MaterialUI";
import "services/browser/Tailwind.css";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
	@font-face{
		font-family:spinnler;font-weight:500;
		src:url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.woff2) 
		format("woff2"),url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.woff) 
		format("woff"),url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.ttf) 
		format("truetype"),url(https://d3el26csp1xekx.cloudfront.net/static/assets/aauxnextcond-medium-custom.otf) 
		format("opentype")}

	  @font-face{
		font-family:fresh;font-weight:500;
		src:url(/font/Rushink-Demo.otf) format("opentype"),
		url(/font/Rushink-Demo.ttf) format("truetype")}
	body {
		font-family: spinnler, sans-serif, fresh;
	}
`

class CustomApp extends App {
    
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Fanmelt</title>
					<GlobalStyles />
				</Head>
				<ThemeProvider theme={theme}>
					<StylesProvider injectFirst>
						<CssBaseline />
						<Component {...pageProps} />
					</StylesProvider>
				</ThemeProvider>
			</>
		);
	}
}

export default CustomApp;

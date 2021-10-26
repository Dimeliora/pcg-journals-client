import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./components/App";

import store from "./store";
import theme from "./theme/theme";

import "./css/index.css";

render(
	<Provider store={store}>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</StyledEngineProvider>
	</Provider>,
	document.getElementById("root")
);

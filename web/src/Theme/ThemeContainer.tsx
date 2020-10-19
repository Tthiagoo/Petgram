import React from "react";

import {
	ColorModeProvider,
	CSSReset,
	ThemeProvider,
	
} from "@chakra-ui/core";

import { ThemeProvider as EmotionTheme } from "emotion-theming";

import theme from "../styles/theme";
const ThemeContainer: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				<EmotionTheme theme={theme}>
					<CSSReset />
					{children}
				</EmotionTheme>
			</ColorModeProvider>
		</ThemeProvider>
	);
};

export default ThemeContainer;
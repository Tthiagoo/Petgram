import React from "react";

import Routes from "./routes";
import ThemeContainer from "./Theme/ThemeContainer";

function App() {
	return (
		<div className="App">
			<ThemeContainer>
				<Routes />
			</ThemeContainer>
		</div>
	);
}

export default App;

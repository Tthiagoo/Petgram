import React from "react";
import { PostProvider } from "./contexts/PostContext";

import Routes from "./routes";
import ThemeContainer from "./Theme/ThemeContainer";

function App() {
	return (
		<div className="App">
			<ThemeContainer>
				<PostProvider>
					<Routes />
				</PostProvider>
			</ThemeContainer>
		</div>
	);
}

export default App;

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

import Card from './components/Card'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'

import cards from './cards'

const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333',
	},
	breakpoints: {
		tablet: '768px',
	},
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				{cards.map((item, idx) => (
					<Card key={item.id} item={item} />
				))}
			</Container>
		</ThemeProvider>
	)
}

export default App

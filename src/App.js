import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'

import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

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
			<Footer />
		</ThemeProvider>
	)
}

export default App

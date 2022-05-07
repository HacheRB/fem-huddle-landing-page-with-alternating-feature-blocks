import { StyledCard } from './styles/Card.styled'

const Card = ({ item }) => {
	const { id, title, body, image } = item
	const isEven = id % 2 === 0 && 'row-reverse'

	return (
		<StyledCard layout={isEven}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt="" />
			</div>
		</StyledCard>
	)
}

export default Card

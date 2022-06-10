import React from "react";



//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = React.useState('yellow')
	return (
		<div className="container">
			<div className="trafficLight">
				<div 
					onClick={() => setSelectedColor('red')}
					className={'light red' + (selectedColor === 'red' ? ' glowRed' : '')}>
				</div>
				<div 
					onClick={() => setSelectedColor('yellow')}
					className={'light yellow' + (selectedColor === 'yellow' ? ' glowYellow' : '')}>

				</div>
				<div 
					onClick={() => setSelectedColor('green')}
					className={'light green' + (selectedColor === 'green' ? ' glowGreen' : '')}>
					
				</div>
			</div>
		</div>
	);
};

export default Home;

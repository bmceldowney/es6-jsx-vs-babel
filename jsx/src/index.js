'use strict'; // need this for let, const and class

class Demo extends React.Component {
	render () {
		return <div>Demo!</div>
	}
}

React.renderComponent(<Demo />, document.getElementById('demo'));

// document.getElementById('demo').innerHTML = 'bloop';

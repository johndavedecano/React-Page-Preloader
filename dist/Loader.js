var React = require('react');

var Loader = React.createClass({  
	getInitialState : function() {
		return {
			position:fixed,
			left:0,
			top:0,
			zIndex:999,
			width:"100%",
			height:"100%",
			overflow:"visible",
			background:"#fff url(" + this.props.loader + ") no-repeat center center",
			cursor: "wait",
			display:this.props.display
		}
	},
	getDefaultProps: function () {
		return {
			loader : "loader.gif",
			display : "none" // or block
		}
	},
	componentWillReceiveProps: function(newProps) {
		if (newProps.loader) {
			this.setState({
				loader : newProps.loader
			});
		}
		if (newProps.display) {
			this.setState({
				display : newProps.display
			})
		}
	},
    render: function() {
        return  (
        	<div style={this.state}></div>
        )
    }
});

module.exports = Loader;
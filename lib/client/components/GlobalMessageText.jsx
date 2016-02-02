GlobalMessageText = React.createClass({
	render() {
		return (
			<li className="global-chat-message-text">
				{this.props.messageText}
			</li>
		)
	}
})
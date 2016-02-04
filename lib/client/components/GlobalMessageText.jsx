GlobalMessageText = React.createClass({
	render() {
		return (
			<li className="global-chat-message-text-container">
				<span className="global-chat-message-username">{this.props.username}</span>
        <span className="global-chat-message-text">{this.props.messageText}</span>
			</li>
		)
	}
})
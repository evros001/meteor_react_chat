DirectMessageText = React.createClass({
  render() {
    return (
      <li className="direct-chat-message-text-container">
        <span className="direct-chat-message-username">{this.props.username}</span>
        <span className="direct-chat-message-text">{this.props.messageText}</span>
      </li>
    )
  }
})
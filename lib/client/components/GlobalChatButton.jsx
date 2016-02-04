GlobalChatButton = React.createClass({

  handleClick() {
    this.props.backToGlobal("Global")
  },

  render() {
    return (
      <h3 className="global-chat-title" onClick={this.handleClick}>Global Chat</h3>
    )
  }
})
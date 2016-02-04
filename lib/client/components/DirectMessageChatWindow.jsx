DirectMessageChatWindow = React.createClass({

  handleSubmit() {
    event.preventDefault();  
    
    let text = React.findDOMNode(this.refs.textInput).value.trim();
    let user = this.props.user.username
    let id = this.props.user._id
    let user_to = this.props.user_to

    Messages.insert({
      message_text: text, 
      createdAt: new Date(),
      user_to: user_to,
      user_from: user,
      user_id: id
    });

    React.findDOMNode(this.refs.textInput).value = "";
  },

  renderDirectMessages() {
    return this.props.messages.map((message) => {
      if (message.message_text && message.user_from && message.user_to === this.props.user_to) {
        return <DirectMessageText key={message._id} messageText={message.message_text} username={message.user_from}/>  
      }
    });
  },

  render() {
    return (
      <div className="direct-chat-window-container">

        <div className="direct-title-hambuger-container">

          <h6 className="direct-chat-window-title">Chat With {this.props.user_to}</h6>
          <div className="logged-in-display">
            <AccountsUIWrapper className="accounts-ui-wrapper"/>
          </div>

        </div>

        <div className="direct-message-text-container">
          <ul className="direct-message-list">
            {this.renderDirectMessages()}
          </ul>
        </div>
        
        <form className="new-direct-message" > 
            <input 
              type="text"
              ref="textInput"
              placeholder="Type your messege here" />
        </form>

      </div>
    )
  }
})
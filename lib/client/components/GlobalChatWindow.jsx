GlobalChatWindow = React.createClass({

  handleSubmit() {
    event.preventDefault();  
    
    let text = React.findDOMNode(this.refs.textInput).value.trim();
    let user = this.props.user.username
    let id = this.props.user._id

    Messages.insert({
      message_text: text, 
      createdAt: new Date(),
      user_to: "global",
      user_from: user,
      user_id: id
    });

    React.findDOMNode(this.refs.textInput).value = "";
  },

  renderGlobalMessages() {
    return this.props.messages.map((message) => {
      if (message.message_text && message.user_from && message.user_to === "global") {
        return <GlobalMessageText key={message._id} messageText={message.message_text} username={message.user_from}/>  
      }
    });
  },

  render() {
    return (
      <div className="global-chat-window-container">

        <div className="global-title-hambuger-container">

          <h6 className="global-chat-window-title">Global Chat</h6>
          <div className="logged-in-display">
            <AccountsUIWrapper className="accounts-ui-wrapper"/>
          </div>

        </div>

        <div className="global-message-text-container">
          <ul className="global-message-list">
            {this.renderGlobalMessages()}
          </ul>
        </div>
        
        <form className="new-global-message" onSubmit={this.handleSubmit} > 
            <input 
              type="text"
              ref="textInput"
              placeholder="Type your messege here" />
        </form>

      </div>
    )
  }
})
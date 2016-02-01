GlobalChatWindow = React.createClass({

  handleSubmit() {
    event.preventDefault();  
    
    let text = React.findDOMNode(this.refs.textInput).value.trim();
    let user = this.props.user.username
    let id = this.props.user._id

    Messages.insert({
      text: text, 
      createdAt: new Date(),
      user_to: "global",
      user_from: user,
      user_id: id
    });

    React.findDOMNode(this.refs.textInput).value = "";
  },

  renderGlobalMessages() {
    return this.props.messages.map((message) => {
      return <li>message.text</li>
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
            {this.renderGlobalMessages}
          </ul>
        </div>
        
        <form className="new-task" onSubmit={this.handleSubmit} > 
            <input 
              type="text"
              ref="textInput"
              placeholder="Type your messege here" />
        </form>

      </div>
    )
  }
})
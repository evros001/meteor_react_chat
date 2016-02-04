App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      allUsers: Meteor.users.find({}).fetch()
    }
  },

  getInitialState() {
    return {
      messages: Messages.find({}, {sort: {createdAt: -1}}).fetch(),
      chatType: "global"
    };
  },

  activateDirectMessage(user) {
    this.setState({chatType: user})
  },

  render() {

    let chatroom;
    if (this.state.chatType === "global") {
      chatroom = <GlobalChatWindow key="global" user={this.data.currentUser} messages={this.state.messages} />
    } else {
      chatroom = <DirectMessageChatWindow key="direct_message" user_from={this.data.currentUser} user_to={this.state.chatType} messages={this.state.messages}/>
    }

    return (

      <div className="app-container">

        { this.data.currentUser ? 
          <div className="app-global-container">
            <Panel
              user={this.data.currentUser}
              allUsers={[this.data.allUsers]} 
              isDirectMessage={this.activateDirectMessage}/>
            {chatroom}
          </div> 
          : <div className="login-app-container"> 
              <LoginOrRegisterPanel />
              <LoginChatWindow /> 
            </div>
        }

      </div>
      
    )
  },
})


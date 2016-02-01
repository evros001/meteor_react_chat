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
      messages: Messages.find({}).fetch(),
    };
  },

  render() {
    return (
      <div className="app-container">

        { this.data.currentUser ? 
          <div className="app-global-container">
            <Panel
              user={this.data.currentUser}
              allUsers={[this.data.allUsers]} />
            <GlobalChatWindow user={this.data.currentUser} messages={this.state.messages} />
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


Panel = React.createClass({
  
  proptypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  renderUsers() {
    return this.props.allUsers[0].map((user) => {
      return <DirectMessageUserName key={user._id} username={user.username} />
    });
  },

  render() {
    return (
      <div className="panel-container">

        <div className="logo-global-container">
          <div className="hive-logo">
          </div>

          <h3 className="global-chat-title">Global Chat</h3>
        </div>

        <div className="direct-message-conatiner">
          <div className="direct-message-users-container">
            <ul className="direct-message-user-list">
              {this.renderUsers()}
            </ul>
          </div>
        </div>

      </div>
    )
  }
})
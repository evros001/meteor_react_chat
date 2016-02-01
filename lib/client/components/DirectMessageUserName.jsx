DirectMessageUserName = React.createClass({
  
  proptypes: {
    task: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li className="direct-message-username-display">
        {this.props.username}
      </li>
    )
  }
})
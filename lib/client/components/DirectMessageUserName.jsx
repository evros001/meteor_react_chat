DirectMessageUserName = React.createClass({
  
  proptypes: {
    task: React.PropTypes.object.isRequired
  },

  handleClick() {
    this.props.toDirectMessage(this.props.username)
  },

  render() {
    return (
      <li className="direct-message-username-display" onClick={this.handleClick}>
        {this.props.username}
      </li>
    )
  }
})
function Component(props, context, updater) {
  this.props = props
  this.context = context
  this.refs = {}
  this.updater = updater
  return this
}
export {Component}
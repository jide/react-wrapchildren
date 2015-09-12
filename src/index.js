import React from 'react';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

export default WrappedComponent => class extends WrappedComponent {
  static displayName = `wrapChildren(${getDisplayName(WrappedComponent)})`;

  traverse(element) {
    console.log(element, element.props && element.props.children);
    if (element.props && element.props.children && !Array.isArray(element.props.children) ||
      (element.props && element.props.children && Array.isArray(element.props.children) && element.props.children.length === 1)) {
      return this.traverse(element.props.children);
    }
    else {
      return React.cloneElement(this.props.wrapper, { children: element });
    }
  }

  render(...args) {
    const element = super.render(...args);

    if (element.props && element.props.children) {
      if (element.props.children) {
        return React.cloneElement(element, {
          children: React.cloneElement(this.props.wrapper, {
            children: element.props.children
          })
        });
      }
    }

    return element;
  }
};

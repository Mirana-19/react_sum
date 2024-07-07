export const Sum = ({ a, b, children, className }) => (
  <p className={className || 'regular'}>
    {children} {a} and {b} is {a + b}
  </p>
);

/* import { Component } from 'react';

export class Sum extends Component {
  state = {
    a: this.props.a,
    b: this.props.b,
  };

  render() {
    return (
      <p>
        Sum of {this.state.a} and {this.state.b} is{' '}
        {this.state.a + this.state.b}
      </p>
    );
  }
}
 */

import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
// import Swal from 'sweetalert2'
// import swal from '@sweetalert/with-react'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) this.setState({complete: true});console.log("Donation Complete!")
  };

// popUp() {
//   MySwal.fire({
//       html: <CardElement />,
//   }).then(() => {
//       return MySwal.fire(<p>Shorthand works too</p>)
//   })
// }


  render() {
      if (this.state.complete) return <h1>Donation Complete</h1>

    return (
      <div className="checkout">
        <p>Republic credits are no good here.  We need something more real.</p>
        <CardElement />
        <button className="donate-mobile" onClick={this.submit}>Donate</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
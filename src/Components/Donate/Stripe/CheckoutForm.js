import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './CheckoutForm.js'
// import Swal from 'sweetalert2'
// import swal from '@sweetalert/with-react'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok) this.setState({ complete: true }); console.log("Donation Complete!")
    };

    // popUp() {
    //   MySwal.fire({
    //       html: <CardElement />,
    //   }).then(() => {
    //       return MySwal.fire(<p>Shorthand works too</p>)
    //   })
    // }


    render() {
        if (this.state.complete) return <div className="complete">Donation Complete!</div>

        return (
            <div>
                <div className="checkout">
                    <CardElement />
                    <button className="donate-mobile" onClick={this.submit}></button>
                </div>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);
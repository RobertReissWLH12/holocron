import React, { Component } from 'react'
import './Donate.scss'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './../Donate/Stripe/CheckoutForm';

export default class Donate extends Component {

    render() {
        return (
            <div className="donate-background">
                <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Russo+One&display=swap" rel="stylesheet"></link>
                <h1>"Republic credits are no good out here, I need something more real."
                <div id="watto-line"></div>
                </h1>
                <div className="donation-display">
                    <h2>Donate to the Holocron!</h2>
                    <StripeProvider apiKey="pk_test_ClZZ4tEa3nSFbIkdNeNdpRDI00l3NvF6kY">
                        <div className="donate">
                            <Elements className="card-info">
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </StripeProvider>
                </div>
            </div>
        )
    }
}
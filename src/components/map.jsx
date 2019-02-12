import React, { Component } from 'react';

export default class Map extends Component {
    render () {
        return (
            <div className="G-Map">
                <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23049.222669371527!2d-87.7562994!3d43.7696862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804a75cc1a7470b%3A0xea088e1b886f31d3!2sCornerstone+Baptist+Church!5e0!3m2!1sen!2sus!4v1549906549016&z=5" width="100%" height="350" frameborder="0" allowfullscreen></iframe>
            </div>
        )
    }
}
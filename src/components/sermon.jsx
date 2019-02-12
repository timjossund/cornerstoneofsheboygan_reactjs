import React, { Component } from 'react';
import './sermon.css'


export default class Sermons extends Component {
    render() {
        return (
            <div className="mainSermonDiv">
                <div class="container sermon">
                    <iframe title="sermon1" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/176458479&#038;color=%237d4313&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true"></iframe>
                </div>
                <div class="container sermon">
                    <iframe title="sermon2" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/176608373&#038;color=%237d4313&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true"></iframe>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Notes from '../notes/Notes';
import Footer from '../footer/Footer';
import NoteState from '../../context/note/NoteStates';

export default class Dashboard extends Component {
    
    hrefLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fimage-colorful-galaxy-sky-generative-ai_37741252.htm&psig=AOvVaw3b4CCa0mYW5sItSn4b3kdr&ust=1696824697080000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjBhN3K5YEDFQAAAAAdAAAAABAE'

    render() {
        return (
            <div>
                <NoteState>
                    <Notes />
                    <Footer />
                </NoteState>
            </div>
        )
    }
}

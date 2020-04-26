import React from 'react';
import axios from 'axios';

class FavoriteMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitForm = (e) => {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';  
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
            alert(`Vous avez ajouté le film ${res.id}`);
        })  
        .catch(e => {
            console.error(e);
            alert(`Une erreur a été rencontrée lors de l'ajout du film`)
        }) 
    }

    render() {
        return(
            <form type="submit" onSubmit={this.submitForm}>
                <label htmlFor="movie-name">Movie Name</label> 
                <input type="text" id="movie-name" name='title' onChange={this.onChange} value={this.state.title} />
                <label htmlFor="link">Link</label>
                <input type='text' id="link" name='poster' onChange={this.onChange} value={this.state.poster} />
                <label htmlFor='comment'>Comment</label>
                <textarea id="comment" name="comment" onChange={this.onChange} value={this.state.comment} />
                <input type="submit" value='submit' />
            </form>
        )
    }
}

export default FavoriteMovie;
import React, {useState, Component} from 'react';
import firebase, { auth, provider } from '../firebase.js';

export default class Collection extends Component {
    // const [setPhotos, savedPhotos] = useState([]);
    constructor() {
        super();
        this.state = {
          user: null
        }  
      }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
          } 
        });
    }
    logout() {
        auth.signOut()
          .then(() => {
            this.setState({
              user: null
            });
          });
    }
    
    login() {
        auth.signInWithPopup(provider) 
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
          });
    }
    render() {
        return (
            <div className = "Collection">
                {
          this.state.user ?
          <div>
            <h2 style={{color:'black'}}>{this.state.user.displayName} 's Collection</h2>
            <div className="profile">
              <img className="img" width="50px" src={this.state.user.photoURL} />
              <h3 className = "email">{this.state.user.email}</h3>
            </div>
          </div>
          :
          <div className='wrapper'>
            <p style={{color:'black'}}>You must login first</p>
            <center>
              <div className="default">
              </div>
            </center>
          </div>
        }
        </div>
        );
    }
}
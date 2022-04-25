import React, { Component } from 'react';

class Personal extends Component {
    render() {
        return (
        <div>
                <h1>PERSONAL DETAIL</h1>
            <div className="group">
            <label  htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" className="detail" placeholder="e.g Okunlola" required></input>
            </div>
            <div className="group">
            <label  htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" className="detail" placeholder="e.g Abdulafeez" required></input>
            </div>
            <div className="group">
            <label htmlFor="othername">Other Name</label>
            <input type="text" id="othername" name="othername" className="detail" placeholder="e.g shola" required></input>
            </div>
            <div className="group">
            <label htmlFor="age">Date of birth</label>
            <input type="date" id="age"  name="surname" className="detail" required></input>
            </div>
            <div className="group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="detail" placeholder="e.g example@gmail.com" required></input>
            </div>
            <div className="group">
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" name="number" className="detail" placeholder="e.g 08093389454" required></input>
            </div> 
            <div className="group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" className="detail" placeholder="enter your address" required></input>
            </div>
                
        </div>
        );
    }
}

export default Personal;
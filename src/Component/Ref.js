import React, { Component } from 'react';

class Ref extends Component {
    render() {
        return (
            <div>
                <h1>REFEREE 1</h1>
                <div className="group">
                <label  htmlFor="ref1">Full Name</label>
                <input type="text" id="ref1" name="ref1" className="detail" placeholder="e.g Ajayi Olumide" required></input>
                </div>
                <div className="group">
                <label  htmlFor="org1">Organistion</label>
                <input type="text" id="org1" name="org1" className="detail" placeholder="e.g oash engineering limited" required></input>
                </div>
                <div className="group">
                <label htmlFor="mail1">Email</label>
                <input type="text" id="mail1" name="mail1" className="detail" placeholder="e.g sholaafeez81@gmail.com" required></input>
                </div>
                <div className="group">
                <label htmlFor="num1">Phone no</label>
                <input type="number" name="num1" id="num1" className="detail" placeholder="e.g 08093389454" required></input>
                </div>
                
            </div>
        );
    }
}

export default Ref;
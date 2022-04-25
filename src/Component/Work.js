import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                <h1>WORK EXPERIENCE</h1>
                <div className="group">
                <label  htmlFor="org">Oganisation</label>
                <input type="text" id="org" name="org" className="detail" placeholder="e.g Oash engineering Limited" required></input>
                </div>
                <div className="group">
                <label  htmlFor="loc">Location</label>
                <input type="text" id="loc" name="loc" className="detail" placeholder="e.g texas" required></input>
                </div>
                <div className="group">
                <label htmlFor="pos">Position</label>
                <input type="text" id="pos" name="pos" className="detail" placeholder="e.g Manager" required></input>
                </div>
                <div className="group">
                <label htmlFor="start">Date started</label>
                <input type="date" id="start"  name="start" className="detail" required></input>
                </div>
                <div className="group">
                <label htmlFor="end">Date ended</label>
                <input type="date" id="end"  name="end" className="detail" required></input>
                </div>
                
            </div>
        );
    }
}

export default Work;
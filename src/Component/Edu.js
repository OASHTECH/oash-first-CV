import React, { Component } from 'react';

class Edu extends Component {
    render() {
        return (
            <div>
                <h1>EDUCATION BACKGROUND</h1>
                <div className="group">
                <label  htmlFor="school">Institute Name</label>
                <input type="text" id="school" name="school" className="detail" placeholder="e.g kwara state polytechnic" required></input>
                </div>
                <div className="group">
                <label  htmlFor="location">Location</label>
                <input type="text" id="location" name="location" className="detail" placeholder="e.g texas" required></input>
                </div>
                <div className="group">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree" className="detail" placeholder="e.g BSC" required></input>
                </div>
                <div className="group">
                <label htmlFor="course">Field of study</label>
                <input type="email" name="course" id="course" className="detail" placeholder="e.g Electrical engineering" required></input>
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

export default Edu;
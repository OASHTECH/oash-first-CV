import React from 'react';
import './App.css';

function App() {
  return (
    <div className="body">
      <h1 className="header">let us know about you</h1>
      <section className="form">
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
      </section>
      <section className="form">
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
      </section>
      <section className="form">
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
      </section>
      <section className="form">
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
      </section>
      <section className="form">
      <h1>REFEREE 2</h1>
      <div className="group">
          <label  htmlFor="ref2">Full Name</label>
          <input type="text" id="ref2" name="ref2" className="detail" placeholder="Ajayi Olumide" required></input>
        </div>
        <div className="group">
          <label  htmlFor="org2">Organistion</label>
          <input type="text" id="org2" name="org1" className="detail" placeholder="e.g oash engineering limited" required></input>
        </div>
        <div className="group">
          <label htmlFor="mail2">Email</label>
          <input type="text" id="mail2" name="mail2" className="detail" placeholder="e.g sholaafeez81@gmail.com" required></input>
        </div>
        <div className="group">
          <label htmlFor="num2">Phone no</label>
          <input type="number" name="num2" id="num2" className="detail" placeholder="e.g 08093389454" required></input>
        </div>      
      </section>
      <button>SUBMIT</button>
    </div>
  );
}

export default App;

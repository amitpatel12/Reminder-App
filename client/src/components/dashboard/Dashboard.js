import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { url } from "../../url/url";
import OpenModal from "../modal/OpenModal";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SpinnerFetch from "../spinner/SpinnerFetch";


function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [remindAt, setRemindAt] = useState();
  const [reminderList, setReminderList] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"));

  const token = localStorage.getItem("token");
 
  useEffect(() =>{
    if(!token){
      navigate('/')
    }
  },[token])
  

  useEffect(() => {
    setLoading(true)
    const id = user._id
    axios
      .get(`${url}/getAllReminder/${id}`)
      .then((res) => { setLoading(false); setReminderList(res.data)});
  }, [change]);

  
  const addReminder = async (e) => {
    e.preventDefault()

    if(!title || !remindAt){
      alert("Please fill required fields")
      return;
    }
    // 
    const data = {
      title: title,
      description: description,
      remindAt: remindAt,
      phone: user.phone,
      userId: user._id,
    };
    await axios.post(`${url}/addReminder`, data);
   
    setTitle("");
    setDescription("");
    setRemindAt();
    setChange((prev) => !prev);
  };

  const deleteReminder = async(id) => {
    await axios.post(`${url}/deleteReminder`, { id });
    setChange((prev) => !prev);
  };

  return (
    <>
    <Navbar/>
    {
      <OpenModal/>
    }
    {

  loading &&
    <SpinnerFetch loading={loading} setLoading={setLoading}/>

}
    <div className="App">
    
      <div className="homepage">
        <div className="homepage_header">
          <h1>Remind Me 🎗️</h1>
   
          <input
            type="text"
            placeholder="Reminder Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Reminder Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
          />

          <DateTimePicker
            value={remindAt}
            onChange={setRemindAt}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
            calendarIcon={null}
            required
            // clearIcon={null}
          />
          <div  className="button" onClick={addReminder}>
            Add Reminder
          </div>

        </div>

        <div className="homepage_body">
          {reminderList.map((reminder,index) => (
            <div className="reminder_card" key={index}>
              <h2>{reminder.title}</h2>
              <h3>Remind Me at:</h3>
              <p>
                {String(
                  new Date(
                    reminder.remindAt.toLocaleString(undefined, {
                      timezone: "Asia/Kolkata",
                    })
                  )
                )}
              </p>
              <div
                className="button"
                onClick={() => deleteReminder(reminder._id)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;

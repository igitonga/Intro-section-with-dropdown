import React from "react";
import "./featureDropdown.scss"
import Todo from "../../../images/icon-todo.svg"
import Planning from "../../../images/icon-planning.svg"
import Calendar from "../../../images/icon-calendar.svg"
import Reminder from "../../../images/icon-reminders.svg"

const FeatureDropdown = () => {
    return(
        <div className="cont">
            <ul>
                <li><img src={Todo} alt="todo icon" /> Todo list</li>
                <li><img src={Calendar} alt="Calendar icon" /> Calendar</li>
                <li><img src={Reminder} alt="Reminders icon" /> Reminders</li>
                <li><img src={Planning} alt="Planning icon" /> Planning</li>
            </ul>
        </div>
    )
} 

export default FeatureDropdown
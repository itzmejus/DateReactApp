import React, { useState } from "react";
import "../Styles/CalenderPage.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function CalenderPage() {
  const [item, setItem] = useState([""]);

  const addItem = () => {
    console.log(item);
  };

  const makePopup = () => {
      // react-popup is used here where i tried to open the popup on a click event which was given to the each date,but it was not working as expected
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>
        <h3>Add Task</h3>
        <input
          type="text"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button onClick={addItem}>Submit</button>
      </div>
    </Popup>;
    // console.log("clicked");
  };
  return (
    <div>
      <div class="calendar">
          {/* top part of the calender which displays day */}
        <div class="calendar__picture">
          <h2>18, Sunday</h2>
          <h3>November</h3>
        </div>
        <div class="calendar__date">
          <div class="calendar__day">M</div>
          <div class="calendar__day">T</div>
          <div class="calendar__day">W</div>
          <div class="calendar__day">T</div>
          <div class="calendar__day">F</div>
          <div class="calendar__day">S</div>
          <div class="calendar__day">S</div>
          <div class="calendar__number"></div>
          <div class="calendar__number">
            <Popup
              trigger={<button className="btn"> ADD</button>}
              position="right center"
            >
              <div>
                <h3>Add Task</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setItem(e.target.value);
                  }}
                />
                <input type="date" />
                <button onClick={setItem}>Submit</button>
              </div>
            </Popup>
          </div>
          <div class="calendar__number"></div>
          <div class="calendar__number" onClick={makePopup}>
            1
          </div>
          <div class="calendar__number">2</div>
          {/* triied to create a function which opens the popupn on a button click by calling the function here */}
          <div class="calendar__number" /* onClick={makePopup} */>3</div>
          <div class="calendar__number">4</div>
          <div class="calendar__number">5</div>
          <div class="calendar__number">6</div>
          <div class="calendar__number">7</div>
          <div class="calendar__number">8</div>
          <div class="calendar__number">9</div>
          <div class="calendar__number">10</div>
          <div class="calendar__number">11</div>
          <div class="calendar__number">12</div>
          <div class="calendar__number">13</div>
          <div class="calendar__number">14</div>
          <div class="calendar__number">15</div>
          <div class="calendar__number">16</div>
          <div class="calendar__number">17</div>
          <div class="calendar__number calendar__number--current">18</div>
          <div class="calendar__number">19</div>
          <div class="calendar__number">20</div>
          <div class="calendar__number">21</div>
          <div class="calendar__number">22</div>
          <div class="calendar__number">23</div>
          <div class="calendar__number">24</div>
          <div class="calendar__number">25</div>
          <div class="calendar__number">26</div>
          <div class="calendar__number">27</div>
          <div class="calendar__number">28</div>
          <div class="calendar__number">29</div>
          <div class="calendar__number">30</div>
        </div>
      </div>
      <div>
          {/* items are displayed here  */}
        <p> Task avalable {item}</p>
      </div>
    </div>
  );
}

export default CalenderPage;

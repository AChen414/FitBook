import React from 'react'



class UserBioForm extends React.Component {

    render() {
        return (
          <div>
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Gender</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Age Range</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Select Age</option>
                  <option>Teen's</option>
                  <option>20's</option>
                  <option>30's</option>
                  <option>40's</option>
                  <option>50's</option>
                  <option>60's</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  What Best Describes Where You're At?
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Select Description</option>
                  <option>
                    I have a low amount of body fat and need/want to build more
                    muscle.
                  </option>
                  <option>
                    I'm "Skinny Fat"- I'm half skinny, half fat. I know I need
                    more muscle but ther's still fat covering my abs.
                  </option>
                  <option>
                    I have good amount of muscle, but I still need to drop fat
                    to reveal my existing muscle definition underneath.
                  </option>
                  <option>
                    I have a high amount of body fat, I can't tell how much
                    muscle I have, I just need to lose alot of fat fast.
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  Workout Experience
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Workout Experience</option>
                  <option>0-1 years</option>
                  <option>2-4 years</option>
                  <option>5 years+</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
        );
    }
}


export default UserBioForm
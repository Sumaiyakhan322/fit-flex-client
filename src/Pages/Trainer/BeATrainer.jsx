import { useState } from "react";


const BeATrainer = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [skills,setSkills]=useState([]);
    const handleSkills=e=>{
        const value=e.target.value;
        const isChecked=e.target.checked;
        if(isChecked){
            setSkills([...skills,value])
        }
        else{
            setSkills(skills.filter(items=>items !==value))
        }
    }

    // Handler function for checkbox changes
    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      const isChecked = event.target.checked;
  
      // Update the state based on whether the checkbox is checked or unchecked
      if (isChecked) {
        setSelectedCheckboxes([...selectedCheckboxes, value]);
      } else {
        setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
      }
    };
  
    // Submit function to show the selected checkbox values
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(skills, selectedCheckboxes);
      // You can perform further actions with the selected checkbox values here
    };
  
    return (
        <form onSubmit={handleSubmit}>
      {/* Example checkboxes */}
      <label>
        <input
          type="checkbox"
          value="8am-10am"
          checked={selectedCheckboxes.includes("8am-10am")}
          onChange={handleCheckboxChange}
        />
        8am-10am
      </label>
      <label>
        <input
          type="checkbox"
          value="12pm-1pm"
          checked={selectedCheckboxes.includes("12pm-1pm")}
          onChange={handleCheckboxChange}
        />
        12pm-1pm
      </label>
      <label>
        <input
          type="checkbox"
          value="2pm-3pm"
          checked={selectedCheckboxes.includes("2pm-3pm")}
          onChange={handleCheckboxChange}
        />
        2pm-3pm
      </label>
      <label>
        <input
          type="checkbox"
          value="6pm-8pm"
          checked={selectedCheckboxes.includes("6pm-8pm")}
          onChange={handleCheckboxChange}
        />
        6pm-8pm
      </label>
      <div>
      <label>
        <input
          type="checkbox"
          value="chair"
          checked={skills.includes("chair")}
          onChange={handleSkills}
        />
        Chair
      </label>
      <label>
        <input
          type="checkbox"
          value="table"
          checked={skills.includes("table")}
          onChange={handleSkills}
        />
       Table
      </label>
      <label>
        <input
          type="checkbox"
          value="box"
          checked={skills.includes("box")}
          onChange={handleSkills}
        />
        Box
      </label>
      <label>
        <input
          type="checkbox"
          value="app"
          checked={skills.includes("app")}
          onChange={handleSkills}
        />
        App
      </label>
      </div>
      {/* Add more checkboxes as needed */}

      <button type="submit">Submit</button>
    </form>
    );
  };
   

export default BeATrainer;
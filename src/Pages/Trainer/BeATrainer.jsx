import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BeATrainer = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const axiosPublic = useAxiosPublic();

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [skills, setSkills] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const handleWeekDays = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setWeeks([...weeks, value]);
    } else {
      setWeeks(weeks.filter((items) => items !== value));
    }
  };
  const handleSkills = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((items) => items !== value));
    }
  };

  // Handler function for checkbox changes
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // Update the state based on whether the checkbox is checked or unchecked
    if (isChecked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== value)
      );
    }
  };

  // Submit function to show the selected checkbox values
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const email = userEmail;
    const image = event.target.image.value;
    const yearsOfExperience = event.target.year.value;
    const experience = event.target.des.value;
    const expectedPayment=event.target.price.value;
    const trainerInfo = {
      name,
      age,
      email,
      image,
      yearsOfExperience,
      experience,
      skills,
      selectedCheckboxes,
      weeks,
      expectedPayment,
      role: "member",
    };
    
    //post on db
    axiosPublic.post("/trainers", trainerInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully join for trainer ${email} `,
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset()
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile name */}
        <div className="relative h-32 w-full items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className=" text-[#194a63] font-bold">Your name?</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full border border-[#c3bd2e]"
            name="name"
          />
        </div>
        {/* Email */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full  border border-[#c3bd2e]"
            name="email"
            readOnly
            value={userEmail ? userEmail : ""}
            id="email"
          />
        </div>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile Image */}
        <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Profile Image</span>
          </label>
          <input
            type="url"
            placeholder="Profile Image"
            className="input input-bordered w-full  border border-[#c3bd2e]"
            name="image"
          />
        </div>
        {/* age */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Age</span>
          </label>
          <input
            type="number"
            placeholder="Your age"
            className="input input-bordered w-full  border border-[#c3bd2e]"
            name="age"
          />
        </div>
      </div>

      {/*Available Time in a day  */}
      <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
        <label className="label">
          <span className="text-[#194a63] font-bold mr-3">
            Available Time in a day:{" "}
          </span>
        </label>
        <div className="space-x-4">
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="8am-9am"
              checked={selectedCheckboxes.includes("8am-9am")}
              onChange={handleCheckboxChange}
            />
            8am-9am
          </label>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="10am-11am"
              checked={selectedCheckboxes.includes("10am-11am")}
              onChange={handleCheckboxChange}
            />
            10am-11am
          </label>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="11am-12am"
              checked={selectedCheckboxes.includes("11am-12am")}
              onChange={handleCheckboxChange}
            />
            11am-12am
          </label>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="2pm-3pm"
              checked={selectedCheckboxes.includes("2pm-3pm")}
              onChange={handleCheckboxChange}
            />
            2pm-3pm
          </label>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="4pm-5pm"
              checked={selectedCheckboxes.includes("4pm-5pm")}
              onChange={handleCheckboxChange}
            />
            4pm-5pm
          </label>
          <label>
            <input
              className="mr-3"
              type="checkbox"
              value="5pm-6pm"
              checked={selectedCheckboxes.includes("5pm-6pm")}
              onChange={handleCheckboxChange}
            />
            5pm-6pm
          </label>
          <label>
            <input
              className="mr-3"
              type="checkbox"
              value="6pm-7pm"
              checked={selectedCheckboxes.includes("6pm-7pm")}
              onChange={handleCheckboxChange}
            />
            6pm-7pm
          </label>
          <label>
            <input
              className="mr-3"
              type="checkbox"
              value="7pm-8pm"
              checked={selectedCheckboxes.includes("7pm-8pm")}
              onChange={handleCheckboxChange}
            />
            7pm-8pm
          </label>
        </div>
      </div>
      {/* Skills */}
      <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
        <label className="label">
          <span className="text-[#194a63] font-bold mr-3">
            Available Time in a day:{" "}
          </span>
        </label>
        <div className="space-x-4">
          <label>
            <input
              type="checkbox"
              value="Strength Training"
              checked={skills.includes("Strength Training")}
              onChange={handleSkills}
            />
            Strength Training
          </label>
          <label>
            <input
              type="checkbox"
              value="Cardiovascular Fitness"
              checked={skills.includes("Cardiovascular Fitness")}
              onChange={handleSkills}
            />
            Cardiovascular Fitness
          </label>
          <label>
            <input
              type="checkbox"
              value="Flexibility and Mobility"
              checked={skills.includes("Flexibility and Mobility")}
              onChange={handleSkills}
            />
            Flexibility and Mobility
          </label>
          <label>
            <input
              type="checkbox"
              value="Nutrition and Diet Planning"
              checked={skills.includes("Nutrition and Diet Planning")}
              onChange={handleSkills}
            />
            Nutrition and Diet Planning
          </label>
        </div>
      </div>
      {/* Availvable time in week */}
      {/* age */}
      <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
        <label className="label">
          <span className="text-[#194a63] font-bold">
            Available Time in a week:
          </span>
        </label>
        <div className="space-x-4">
          <label>
            <input
              type="checkbox"
              value="Sunday"
              checked={weeks.includes("Sunday")}
              onChange={handleWeekDays}
            />
            Sunday
          </label>
          <label>
            <input
              type="checkbox"
              value="Monday"
              checked={weeks.includes("Monday")}
              onChange={handleWeekDays}
            />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              value="Tuesday"
              checked={weeks.includes("Tuesday")}
              onChange={handleWeekDays}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              value="Wednesday"
              checked={weeks.includes("Wednesday")}
              onChange={handleWeekDays}
            />
            Wednesday
          </label>
          <label>
            <input
              type="checkbox"
              value="Thursday"
              checked={weeks.includes("Thursday")}
              onChange={handleWeekDays}
            />
            Thursday
          </label>
          <label>
            <input
              type="checkbox"
              value=" Friday"
              checked={weeks.includes(" Friday")}
              onChange={handleWeekDays}
            />
            Friday
          </label>
          <label>
            <input
              type="checkbox"
              value="Saturday"
              checked={weeks.includes("Saturday")}
              onChange={handleWeekDays}
            />
            Saturday
          </label>
        </div>
      </div>
      {/*expreimence */}
      <div className="flex gap-4 md:flex-row flex-col">
      <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
        <label className="label">
          <span className="text-[#194a63] font-bold">
            Years of Experience:{" "}
          </span>
        </label>
        <input
          type="number"
          placeholder="Years of Experience:"
          className="input input-bordered md:w-1/2  w-full border border-[#c3bd2e]"
          name="year"
        />
      </div>
      <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
        <label className="label">
          <span className="text-[#194a63] font-bold">
            Expected Payment:{" "}
          </span>
        </label>
        <input
          type="text"
          placeholder="Payment:"
          className="input input-bordered md:w-1/2  w-full border border-[#c3bd2e]"
          name="price"
        />
      </div>
      </div>
      <div className="relative h-32 w-full  flex md:flex-row flex-col items-center justify-center gap-2">
        <label htmlFor="des" className="text-[#194a63] font-bold">
          Experience
        </label>
        <textarea
          className="textarea border border-[#c3bd2e] w-full"
          name="des"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
      >
        Apply
      </button>
    </form>
  );
};

export default BeATrainer;

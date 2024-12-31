import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const LnaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cnic: '',
    cnicDate: '',
    addressOrCity: '',
    gender: '',
    ageRange: '',
    adoptionReason: ''
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/adopt/submit-adoption-form', formData);
      setFeedback(response.data.message);
      toast.success("Adoption form submitted successfully!");
    
      window.location.reload(true); 
    } catch (error) {
      setFeedback('Failed to submit form. Please try again later.');
      toast.success("Failed to submit form");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-[#c7a15b] text-white text-center font-bold uppercase">
          Love Nest Adoption!
        </div>
        <form className="py-4 px-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          {/* CNIC */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cnic">
              CNIC
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnic"
              type="text"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="*****-*******-*"
            />
          </div>

          {/* CNIC Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cnicDate">
              CNIC Date of Issue
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnicDate"
              type="date"
              value={formData.cnicDate}
              onChange={handleChange}
              placeholder="Select a date"
            />
          </div>

          {/* Address/City */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="addressOrCity">
              Address or City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="addressOrCity"
              type="text"
              value={formData.addressOrCity}
              onChange={handleChange}
              placeholder="Enter your address or city"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
              Gender of Child
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Girl">Girl</option>
              <option value="Boy">Boy</option>
            </select>
          </div>

          {/* Child Age */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ageRange">
              Child Age
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
            >
              <option value="">Select Child Age</option>
              <option value="1-5">1-5</option>
              <option value="5-10">5-10</option>
              <option value="10-13">10-13</option>
            </select>
          </div>

          {/* Adoption Reason */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="adoptionReason">
              Why do you want to adopt a child?
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="adoptionReason"
              rows="7"
              value={formData.adoptionReason}
              onChange={handleChange}
              placeholder="Enter your reason"
            ></textarea>
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-[#c7a15b] text-white py-2 px-4 rounded hover:bg-[#a67e4c] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>

          {feedback && <p className="text-center text-red-500">{feedback}</p>}
        </form>
      </div>
    </div>
  );
};

export default LnaForm;







// import React from "react";

// const LnaForm = () => {
//   return (
//     <div>
//       <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="text-2xl py-4 px-6 bg-[#c7a15b] text-white text-center font-bold uppercase">
//           Love Nest Adoption!
//         </div>
//         <form className="py-4 px-6" action="" method="POST">
//           {/* Name */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Phone */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="phone"
//             >
//               Phone Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="phone"
//               type="tel"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           {/* CNIC */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="cnic"
//             >
//               CNIC
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="cnic"
//               type="text"
//               placeholder="*****-*******-*"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="date"
//             >
//               Cnic Date Of Issue
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="date"
//               type="date"
//               placeholder="Select a date"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="workAddress"
//             >
//               Address Or City
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="Address or city"
//               type="text"
//               placeholder="Enter your address or city"
//             />
//           </div>

//           {/* Gender of Child */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="gender"
//             >
//               Gender of Child
//             </label>
//             <select
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="gender"
//               name="Gender"
//             >
//               <option value="">Select Gender</option>
//               <option value="Girl">Girl</option>
//               <option value="Boy">Boy</option>
//             </select>
//           </div>

//           {/* Child Age */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="Age">
//               Child Age
//             </label>
//             <select
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="Age"
//               name="Age"
//             >
//               <option value="">Select Child Age</option>
//               <option value="1-5">1-5</option>
//               <option value="5-10">5-10</option>
//               <option value="10-13">10-13</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="message"
//             >
//               Why do you want to adopt a child?
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="message"
//               rows="7"
//               placeholder="Enter "
//             ></textarea>
//           </div>

//           <div className="flex items-center justify-center mb-4">
//             <button
//               className="bg-[#c7a15b] text-white py-2 px-4 rounded hover:bg-[#a67e4c] focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LnaForm;

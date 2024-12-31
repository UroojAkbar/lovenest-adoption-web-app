import React from "react";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="relative h-[60vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center"
        // style={{ backgroundImage: url("/contact.jpg") }}
        style={{
          backgroundImage: "url('/contact.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Title */}
        <div className="absolute top-0 left-0 z-10 bg-black opacity-60 h-full w-full"></div>
      <div className="relative z-20 flex flex-col items-center text-white h-full w-full justify-center gap-4 px-4">
        <h4 className="text-3xl md:text-2xl font-semibold ">"LOVE NEST ADOPTION IS All ABOUT TURNING DREAMS INTO REALITY"</h4>
        <p>We’re here to make sure every child has a future filled with hope and kindness.</p>
      </div>
    </div>
        
      

      {/* Content */}
      <div className="bg-white p-8 md:p-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#c7a15b] my-6 md:my-8">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg  text-gray-700 leading-relaxed mb-6 md:mb-8">
            We aim to support open adoption relationships through technology,
            education, and community. With every choice we make, from security,
            to pricing, to the overall user experience, we aim to honor the
            child at the center of each adoption.
          </p>
          <p className="text-base sm:text-lg  text-gray-700 leading-relaxed mb-6 md:mb-8">
            We believe that with clear boundaries and a sincere desire for
            meaningful connection...open adoption works!
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#c7a15b] my-6 md:my-8">
            Our Story
          </h2>
          <p className="text-base sm:text-lg  text-gray-700 leading-relaxed mb-6 md:mb-8">
            After practicing adoption law for almost twenty years, our
            co-founders were all too familiar with the challenges many adoptive
            parents face. Their goal was to create a platform that simplifies
            the adoption process while maintaining the highest ethical
            standards.
          </p>
          <p className="text-base sm:text-lg  text-gray-700 leading-relaxed mb-6 md:mb-8">
            Since 2017, we’ve been working alongside tech and design experts to
            create an easy-to-use, secure digital platform that supports birth
            parents, adoptive parents, adoptees, and adoption professionals as
            they navigate open adoption communication.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#c7a15b] my-6 md:my-8">
            Our Team
          </h2>
          <p className="text-base sm:text-lg  text-gray-700 leading-relaxed">
            We know adoption. The AdoptConnect team consists of adoptees, birth
            parents, adoptive parents, and adoption professionals. Heck, even
            our developer has a personal connection to adoption!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center h-screen"
        // style={{
        //   backgroundImage: "url('/about.webp')",
        // }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative flex flex-col justify-center items-center h-screen z-10">
//         <div className="flex items-center justify-center h-2/3">
//           <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-wider">
//             About Us
//           </h1>
//         </div>
//       </div>

//       {/* Additional Section */}
//       <div className="relative bg-white p-8 text-center z-20">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-orange-500 my-8">
//             Our Mission
//           </h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             We aim to support open adoption relationships through technology,
//             education, and community. With every choice we make, from security,
//             to pricing, to the overall user experience, we aim to honor the
//             child at the center of each adoption.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             We believe that with clear boundaries and a sincere desire for
//             meaningful connection...open adoption works!
//           </p>

//           <h2 className="text-3xl font-bold text-orange-500 my-8">Our Story</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             After practicing adoption law for almost twenty years, our
//             co-founders were all too familiar with the challenges many adoptive
//             parents face. Their goal was to create a platform that simplifies
//             the adoption process while maintaining the highest ethical
//             standards.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Since 2017, we’ve been working alongside tech and design experts to
//             create an easy-to-use, secure digital platform that supports birth
//             parents, adoptive parents, adoptees, and adoption professionals as
//             they navigate open adoption communication.
//           </p>
//           <h2 className="text-3xl font-bold text-orange-500 my-8">Our Team</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             We know adoption. The AdoptConnect team consists of adoptees, birth
//             parents, adoptive parents, and adoption professionals. Heck, even
//             our developer has a personal connection to adoption!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

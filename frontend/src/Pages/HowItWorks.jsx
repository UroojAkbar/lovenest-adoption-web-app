import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-[#c7a15b] tracking-wide uppercase">
          How It Works
        </h2>

        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Simplifying the Adoption Process
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          LovenestAdoption helps you find the right match and guides you through
          every step of the adoption journey.
        </p>
      </div>

      <div className="mt-10">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Step 1 */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Step 1: Create an Account
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Sign up with your basic details and start your adoption journey.
            </p>
          </div>
          {/* Step 2 */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Step 2: Browse Orphanages
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Explore orphanages and find the right match using our advanced
              search and filter options.
            </p>
          </div>
          {/* Step 3 */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Step 3: Submit an Application
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Select a child and submit your application with the necessary
              documents.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Step 4 */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Step 4: Schedule a Visit
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Plan a visit to the orphanage to meet the child and learn more
              about them.
            </p>
          </div>
          {/* Step 5 */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Step 5: Finalize Adoption
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Complete the legal process and welcome your new family member
              home.
            </p>
          </div>
          {/* Conclusion */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ready to Begin?
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Start your adoption journey today. Sign up or contact our support
              team for more information.
            </p>
          </div>
        </div>

        {/* Button below the text content */}
        <div className="flex justify-center mt-10">
          <Link to="/Form">
            <button className="px-6 py-3 bg-[#c7a15b] text-white font-semibold rounded-lg shadow-md hover:bg-[#a67e4c]">
              Go to Form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

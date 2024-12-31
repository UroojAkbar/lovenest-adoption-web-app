import React from 'react';
import BankImage from ".././assets/bank 2.png"; 
const DonationSection = () => {
  return (
    <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content (Title and Description) */}
      <div>
        <span className="inline-block bg-primary text-white py-2 px-4 rounded-full text-sm font-medium mb-4">Donate Now</span>
        <h2 className="text-4xl font-bold text-dark mb-4">Thanks For The Results Achieved With You</h2>
        <p className="text-gray-600 mb-8">
          Help Us Make a Difference. At LoveNestAdoption, we believe in a future where every child has the chance to grow up in a loving home. Our non-profit organization exists to make this dream a reality, and we rely on the kindness of people like you to help us achieve our goals.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Why Your Support is Important:</strong><br />
          Simplifying the Process: Your donations help us make the adoption process as easy and accessible as possible for families and children.<br />
          Finding Loving Homes: With your support, we can connect children with warm, caring families who will provide them with the love and stability they deserve.<br />
          Changing Lives: Each donation plays a vital role in transforming lives, offering hope and a better future to those who need it most.
        </p>
        <p className="text-gray-600">
          <strong>Our Promise:</strong><br />
          As a non-profit, our focus is on using every donation to further our mission. Your generosity allows us to dedicate our resources to helping children and families, ensuring that every dollar goes towards making a real impact.
        </p>
      </div>

      {/* Right Content (Bank Details) */}
      <div className="p-6 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-dark mb-4">Bank Details</h2>
        <p className="text-gray-600 mb-6">
        You can use the banking details below to make your donation. These details are accessible globally. Have a blessed life!

        </p>
        
        {/* Bank Information */}
        <div className="text-left space-y-2 text-gray-700">
          <p><strong>Bank:</strong> Habib Bank Limited</p>
          <p><strong>Branch:</strong> Peshawar</p>
          <p><strong>Account title:</strong> Ariba Urooj Trust</p>
          <p><strong>Account no:</strong> 111300017240001</p>
          <p><strong>IBAN:</strong> PK57BKIP0111300017240801</p>
          <p><strong>Swift Code:</strong> BKIPPKKi</p>
        </div>

        <div className="text-right mt-6">
          <img
            src={BankImage}
            alt="Bank Islami Logo"
            className="inline-block w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default DonationSection;

import { useState, useContext } from 'react';
import ProfileEditModal from "../dashboardProfile/ProfileEditModal";
import ProfileEditModalContext from "../../../context/ProfileEditModalContext";


const ProfileMyProfileOverview = () => {
  const { showModal, setShowModal } = useContext(ProfileEditModalContext);
  const [profile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe123@gmail.com',
    mobile: '123 456 7890',
    upi: 'jdoe123',
    dob: '2003-10-12',
    gender: 'Male',
    yearLevel: '3rd Year',
    dietary: 'Vegan',
    license: 'Full',
    emergencyFirstName: 'Mary',
    emergencyLastName: 'Doe',
    relationship: 'Mother',
    emergencyMobile: '234 567 8901',
  });

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <>
      {showModal && (<ProfileEditModal />)}
      <div
        className="dashboard bg-white w-full flex flex-col rounded-lg shadow-lg"
        style={{
          padding: '30px',
        }}
      >
        <div className="flex justify-between mb-4">
          <h2 className="dashboard text-heading2 text-primary">Profile Overview</h2>
          <button className="dashboard text-body-heading text-primary underline bg-transparent" onClick={handleShowModal}>
            Edit Profile
          </button>
        </div>

        {/* Personal Details Section */}
        <div className="mb-4">
          <h3 className="dashboard text-heading3 mb-2">Personal Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-0">
            {/* Row 1 */}
            <div>
              <label className="dashboard text-detail-regular">First Name</label>
              <p className="text-body">{profile.firstName}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Last Name</label>
              <p className="text-body">{profile.lastName}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">UPI</label>
              <p className="text-body">{profile.upi}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Gender</label>
              <p className="text-body">{profile.gender}</p>
            </div>
            {/* Row 2 */}
            <div>
              <label className="dashboard text-detail-regular">Preferred Email</label>
              <p className="text-body break-words">{profile.email}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Mobile Number</label>
              <p className="text-body">{profile.mobile}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Date of Birth</label>
              <p className="text-body">{profile.dob}</p>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="mb-6">
          <h3 className="dashboard text-heading3 mb-4">Additional Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-6">
            {/* Row 1 */}
            <div>
              <label className="dashboard text-detail-regular">Year Level</label>
              <p className="text-body">{profile.yearLevel}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Dietary Requirements</label>
              <p className="text-body">{profile.dietary}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Driver's License</label>
              <p className="text-body">{profile.license}</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact Details Section */}
        <div className="">
          <h3 className="dashboard text-heading3 mb-4">Emergency Contact Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-6">
            {/* Row 1 */}
            <div>
              <label className="dashboard text-detail-regular">First Name</label>
              <p className="text-body">{profile.emergencyFirstName}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Last Name</label>
              <p className="text-body">{profile.emergencyLastName}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Relationship</label>
              <p className="text-body">{profile.relationship}</p>
            </div>
            <div>
              <label className="dashboard text-detail-regular">Mobile Number</label>
              <p className="text-body">{profile.emergencyMobile}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMyProfileOverview;

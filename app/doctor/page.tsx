export default function DoctorPage() {
    return (
      <div>
        <h1 className="title">의료진 소개</h1>
        <h2 className="doctor-name">박현선 원장</h2>
        <div className="doctor-card">
          <div>
            <img src="/images/doctor.jpg" alt="원장 사진" className="doctor-img" />
          </div>
          <ul className="doctor-info">
          </ul>
        </div>
      </div>
    );
  }
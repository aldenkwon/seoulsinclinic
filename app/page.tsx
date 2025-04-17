'use client';
import KakaoMap from './components/KakaoMap';

export default function Home() {
  return (
    <div>
      <div className="banner">
        📢 공지사항 입니다.
      </div>

      <h1 className="title">서울신내과 입니다.</h1>
      <p>서울신내과는 마음을 담아 진료합니다</p>

      <h2 id="clinic-section" className="title" style={{ marginTop: '40px' }}>진료안내</h2>
      <p className="clinic-desc">
        저희 서울신내과는 만성질환 전문 내과 전문의와 내과(신장분과)가 갖출 수 있는 최고 수준의 최신식 의료장비와<br />
        <strong>'최첨단 인공지능 혈액 투석기'</strong>를 운영하고 있습니다.
      </p>
      <ul className="clinic-promises">
        <li>'환자 중심의 편안한 투석환경'</li>
        <li>'최첨단 인공지능 혈액 투석'</li>
        <li>'신장내과 전문의 상시 진료'</li>
        <li>'TDMS 투석관리 시스템 교체'</li>
      </ul>

      <table className="clinic-table">
        <thead>
          <tr>
            <th>요일</th>
            <th>진료시간</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>월</td><td>09:00 - 18:00</td><td>13:00 - 14:00 휴게시간</td></tr>
          <tr><td>화</td><td>09:00 - 18:00</td><td>13:00 - 14:00 휴게시간</td></tr>
          <tr><td>수</td><td>09:00 - 18:00</td><td>13:00 - 14:00 휴게시간</td></tr>
          <tr><td>목</td><td>09:00 - 12:30</td><td>-</td></tr>
          <tr><td>금</td><td>09:00 - 18:00</td><td>13:00 - 14:00 휴게시간</td></tr>
          <tr><td>토</td><td>09:00 - 13:00</td><td>-</td></tr>
          <tr><td>일</td><td>09:00 - 18:00</td><td>13:00 - 14:00 휴게시간</td></tr>
        </tbody>
      </table>
      <p className="clinic-note">※ 일요일, 공휴일 정상진료</p>

      <h3 className="subsection-title">진료과목</h3>
      <ul className="clinic-list">
        <li>소화기질환</li>
        <li>호흡기질환</li>
        <li>만성질환</li>
        <li>간질환</li>
      </ul>

      <h3 className="subsection-title">기본검사</h3>
      <ul className="clinic-list">
        <li>문진, 흉부촬영, 골밀도, 폐기능, 심전도, 소변검사, 대변검사 등</li>
      </ul>

      <h3 className="subsection-title">혈액검사</h3>
      <ul className="clinic-list">
        <li>일반혈액검사, 빈혈, 고혈압, 당뇨, 간염, 간기능, 신장기능, 지질, 성병, 호르몬, 갑상선기능, 각종암표지자 등</li>
      </ul>

      <h3 className="subsection-title">초음파검사</h3>
      <ul className="clinic-list">
        <li>갑상선, 경동맥, 유방, 복부, 전립선 등</li>
      </ul>

      <h2 id="contact-section" className="title" style={{ marginTop: '40px' }}>오시는 길</h2>
      <p className="clinic-desc">
        인천광역시 계양구 작전대로 ○○, 한미리빌딩 2층 (서울신내과)<br />
        작전역 4번 출구에서 300번 버스 이용 (10분), 계산역에서 588번 버스 이용 (10분)<br />
        김포공항에서는 자가용으로 약 25분 거리, 작전역에서 약 8분 거리<br /><br />
        투석실 연락처: <strong>032-545-0333</strong><br />
        <strong>지하 1층 무료 주차 가능</strong>
      </p>

      {/* ✅ 여기 지도 삽입 */}
      <KakaoMap />
    </div>
  );
}

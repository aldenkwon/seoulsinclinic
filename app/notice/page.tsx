export default function NoticePage() {
    const notices = [
      {
        title: "근로자의 날 휴진 안내",
        date: "2025-04-17",
      },
      {
        title: "추석 연휴 휴진 안내",
        date: "2024-09-25",
      },
    ];
  
    return (
      <div>
        <h1 className="title">공지사항</h1>
        <ul className="notice-list">
          {notices.map((notice, index) => (
            <li key={index} className="notice-item">
              <div className="notice-title">{notice.title}</div>
              <div className="notice-date">{notice.date}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
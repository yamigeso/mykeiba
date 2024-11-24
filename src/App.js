import { Link } from "react-router-dom";

export default function RootLayout({ children }) {
  return (
        <div className="bg">
          <div className="main">
            <div className="main-content">{children}</div>
          </div>
          <div id="Pages">
            {/* <Link to="/"><div>Home</div></Link>
            <Link to="/Registration"><div>Registration</div></Link>
            <Link to="/Race"><div>Datas</div></Link>
            <Link to="/ThisWeek"><div>This Week</div></Link> */}
          </div>
        </div>
  );
}

import { Link } from "react-router-dom";

const UploadPanel = ({ props }) => {


  return (
    <div className={props.uploadActive ? "uploadPanel" : "uploadPanelInactive"}>
      <h2 className="uploadText">Upload a mem!</h2>
      <Link className="uploadButton" to={"/meme"}>
        Upload (Missing Icon)
      </Link>
      {/* <div></div> */}
    </div>
  );
};

export default UploadPanel;

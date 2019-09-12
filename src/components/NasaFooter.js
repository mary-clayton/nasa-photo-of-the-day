import React from "react";

const NasaFooter = props => {
  return (
    <div className="nasafooter">
      <p className="copyright">© {props.copyright}</p>
    </div>
  );
};
export default NasaFooter;

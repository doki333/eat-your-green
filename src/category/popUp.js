import * as React from "react";
import { Link } from "react-router-dom";

function StoreInfo(props) {
  const { info, path } = props;
  return (
    <div className="popUp">
      <p>{info.upso_nm}</p>

      <p>
        {info.crtfc_gbn_nm}({info.bizcnd_code_nm})
      </p>
      <Link
        to={{
          pathname: `${path.url}/${info.crtfc_upso_mgt_sno}`,
          state: { info },
        }}
      >
        More...
      </Link>
    </div>
  );
}

export default React.memo(StoreInfo);

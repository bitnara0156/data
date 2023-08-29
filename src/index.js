import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState } from "react";
import Papa from "papaparse";
import { columns} from "./data";

import "./styles.css";

const App = () => {

  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSuW8OF_fN0t--HhhfjYEF_wHZQpwjt9gX0BIDoEIhVz8q06Mu2tFRvGyIEF_Ke1ICm5StaFiLt-V3F/pub?gid=749001201&single=true&output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);

    },
  });
  console.log(JSON.stringify(data, null, 2));

  const tableData = {
    columns,
    data
  };
  return (
    <div className="main">

      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={JSON.stringify(data, null, 2)}
          noHeader

			fixedHeader
			responsive={true}
			pagination


          highlightOnHover
        />
      </DataTableExtensions>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

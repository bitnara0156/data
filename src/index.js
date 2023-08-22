import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState, useEffect } from "react";
import { columns} from "./data";

import "./styles.css";

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://sheetdb.io/api/v1/ww2jgrca6vv6s"
      );
      const parsed = await response.json();
      setData(parsed);
    })();
  }, []);

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

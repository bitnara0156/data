import React, { Component }  from 'react';
export const columns = [
	{
    name: "ID",
    selector: "ID",
	width: "70px",

    sortable: true
  },


  {
    name: "Site Name",
    selector: "Site-Name",
	wrap: true,
	width:"200px",
    sortable: true
  },
	{
		name: "Customer Name",

		selector: "Customer-Name",
	width:"200px",
	wrap: true,
		sortable: true
	},
  {
    name: "OLT-SW-Port-Number",
    selector: "OLT-SW-Port-Number",
	width:"200px",
	wrap: true,
    sortable: true,

  },
  {
    name: "IP Addrees PPOE Name",
    selector: "IPAddrees_PPOE",
	width:"150px",
	wrap: true,
    sortable: true,
		cell: (data) => (
			<a href={data.GRAPH} target="_blank" className="dlink">
				{data.IPAddrees_PPOE}
			</a>
		)
  },
  {
    name: "Device Serial nNumber",
    selector: "Device-Serial",
	width:"150px",
	wrap: true,
    sortable: true
  },

  {
    name: "Bras Name",
    selector: "Bras",
	width:"200px",
	wrap: true,
    sortable: true
  },
  {
    name: "VLAN ID",
    selector: "VLAN-ID",
	width:"60px",
    sortable: true
  },
{
    name: "Zone",
    selector: "Zone",
	width: "50px",
    sortable: true

  },
  {
    name: "Bandwidth",
    selector: "Bandwidth",
	width:"80px",
    sortable: true
  },
	{
		name: "Note",

		selector: "Note",
	width:"300px",
	wrap: true,
		sortable: true
	},
  {
    name: "Gateway nPassword",
    selector: "Gateway-Password",
	wrap: true,
    sortable: true

  },

];

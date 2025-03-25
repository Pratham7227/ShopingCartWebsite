import React, { useEffect, useState } from 'react'
import { getProject } from '../Services/emp';
import { AgGridReact } from "@ag-grid-community/react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";

// ✅ Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);
export const ProjectTable = ({isNewProject}) => {

    const[rowData,setRowData]=useState([]);

    useEffect(()=>{
        async function callApi(params) {
            const projects=await getProject();
            setRowData(projects)
        }
        callApi()
    },[isNewProject])

   async function handleButton(params) {
        const projects=await getProject();
        setRowData(projects);
    }

    
  const columnDefs = [
  { headerName: "Project Code", field: "projectCode", sortable: true,  },
  { headerName: "Project Name", field: "projectName", sortable: true,  },
];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
         <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
           {/* Title */}
           <h2 className="text-xl font-semibold text-gray-800 mb-4">Project List</h2>
   
           {/* Refresh Button */}
           <button
             onClick={handleButton}
             className="mb-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
           >
             Refresh Projects
           </button>
   
           {/* AG Grid Table */}
           <div className="ag-theme-alpine w-full h-[400px] rounded-lg  ">
             <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               pagination={true}
               paginationPageSize={7}
               domLayout="autoHeight"
             />
           </div>
         </div>
       </div>
  )
}

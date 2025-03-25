
import React, { useState } from 'react'
import { ProjectTable } from './ProjectTable';
import { addProject } from '../Services/emp';

export const Project = () => {
  
    const [projectData,setProjectData]=useState({projectname:"",projectcode:""});
    const [isNewProject,setIsNewProject]=useState(false);


   function handleSubmit(e){
    e.preventDefault()
       console.log("ProjectName",projectData.projectname);
       console.log("ProjectCOde",projectData.projectcode);
       addProject(projectData.projectname,projectData.projectcode,setIsNewProject);
   }
   function handleChange(e){
       const {name,value}=e.target;
      setProjectData((prev)=>({
          ...prev,
           [name]:value
      }))
   } 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 flex-col md:flex-row">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
              Add Project
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="projectname" className="block text-sm font-medium text-gray-600">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectname"
                  name="projectname"
                  placeholder="Web-dev"
                  required
                  value={projectData.projectname}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                />
              </div>
    
              <div>
                <label htmlFor="projectcode" className="block text-sm font-medium text-gray-600">
                  Project Code
                </label>
                <input
                  type="text"
                  id="projectcode"
                  name="projectcode"
                  placeholder="001"
                  required
                  value={projectData.projectcode}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                />
              </div>
    
              
    
             
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Add Project
              </button>
            </form>
          </div>
          <div><ProjectTable isNewProject={isNewProject}/></div>
    
        </div>
  )
}


import toast, { Toaster } from 'react-hot-toast';

export const addEmp=async(firstname,lastname,email,empcode,setIsNewUser,isNewUser)=>{

    const formData=new FormData();
    formData.append("FirstName",firstname)
    formData.append("LastName",lastname)
    formData.append("Email",email)
    formData.append("EmpCode",empcode)
    try{
         const response=await fetch("http://localhost:5281/api/Employee/addEmployee",{method:"POST",body:formData});
         const res=await response.json();
         console.log("response ---",res);
         isNewUser?(setIsNewUser(false)):setIsNewUser(true)
        //  if(isNewUser){
        //     setIsNewUser(false);
        //  }else{
        //    setIsNewUser(true);
        //  }

    }catch(e){
         console.log("Error",e);
         
    }
}

export const getEmp=async(setRowData)=>{
    try{
      const response=await fetch('http://localhost:5281/api/Employee/getAllEmployees');
      const res=await response.json();
      console.log("REsponse-----",res);
      return res;
    //   setRowData(res)

    } catch(e){
         console.log("error",e);
         
    }
}

export const addProject=async(projectname,projectcode,setisNewProject)=>{
    try{
       const formData=new FormData();
       formData.append("ProjectName",projectname);
       formData.append("ProjectCode",projectcode);
       const response=await fetch("http://localhost:5281/api/Employee/addProject",{method:"POST",body:formData});
       const res=await response.json();
       setisNewProject((prev)=>!prev)
       console.log("REsponse is",res);
       toast.success("Project Addedd Successfully ")
       
    }catch(e){
        console.log("error",e);
        
    }
}
export const getProject=async()=>{
    try{
       const response=await fetch("http://localhost:5281/api/Employee/getAllProjects");
       const res=await response.json();
       console.log("projects",res);
       return res;
    }catch(e){
        console.log("error",e);
        
    }
}

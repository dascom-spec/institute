import { createContext, useState } from "react";

//CREATE CONTEXT
export const CourseContext = createContext();

//COURSE PROVIDER
export const CourseProvider = (props) =>{
    const[courseBox , setCourseBox] = useState([])

  // ADD FUNCTION

    const addCourse = (course) =>{
        setCourseBox([...courseBox, course])
    }

    const clear =()=>{
        setCourseBox([])
      }

    const courseValue = {addCourse,courseBox,setCourseBox,clear}

    return(
        <CourseContext.Provider value={courseValue}>
            {props.children}
        </CourseContext.Provider>
    )
}
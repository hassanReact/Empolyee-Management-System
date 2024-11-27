import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const Tasklist = ({Data}) => {
  return (
    <div
      id="Tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full mt-10 py-5 rounded-xl"
    >
     <AcceptTask/>
     <NewTask/>
     <FailedTask/>
     <CompleteTask/>
    </div>
  );
};

export default Tasklist;

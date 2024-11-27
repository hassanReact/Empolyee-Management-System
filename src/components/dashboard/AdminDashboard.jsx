import React from "react";
import Header from "../../assets/Others/Header";
import CreateTask from "../../assets/Others/CreateTask";
import AllTask from "../../assets/Others/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <div className="h-screen p-10">
        <Header />
        <CreateTask/>
        <AllTask/>
      </div>
    </>
  );
};

export default AdminDashboard;

/** @format */

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExportJson from "./ExportJson";
import FamilyCard from "./FamilyCard";
import FamilyCardInput from "./familyCardInput";
import FolderAccordion from "./FolderAccordian";
import { ToggleAccordian } from "./Redux/FamilyDetailsSlice";

import "./home.css";
const Home = () => {
  const jsonData = useSelector((state) => state.AccordianUi.data);

  const [addingInProgress, setAddingInProgress] = useState(false);

  const dispatch = useDispatch();

  const jsonReader = (uploadedFile) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const jsonData = JSON.parse(fileReader.result);

      dispatch(ToggleAccordian.importJson([jsonData]));
    };
    if (uploadedFile !== undefined) fileReader.readAsText(uploadedFile);
  };
  return (
    <>
     
      <div style={{ display: "flex", flexDirection: "row" }}>
        <FolderAccordion data={jsonData} marginRight={0} />

        {addingInProgress ? (
          <FamilyCardInput setAddingInProgress={setAddingInProgress} />
        ) : (
          <FamilyCard />
        )}
       
      </div>
     
      <input
          accept='application/JSON'
          id='icon-button-file'
          type='file'
          name='files'
          onChange={(e) => jsonReader(e.target.files[0])}
        ></input>
     <div className="add-button">  <Button variant="outlined" onClick={() => setAddingInProgress(true)}>
        Add Family
      </Button> <ExportJson />
     </div>
    
       
     
       
     
    </>
  );
};

export default Home;

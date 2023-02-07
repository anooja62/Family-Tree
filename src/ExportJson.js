import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import './home.css'
const ExportJson = () => {
  const data = useSelector((state) => state.AccordianUi.data);
  const downLoadJson = () => {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <Button variant="outlined" onClick={downLoadJson}>Export Json</Button>;
};

export default ExportJson;

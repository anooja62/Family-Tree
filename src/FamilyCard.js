/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardHeader from "@material-ui/core/CardHeader";

import Avatar from "@material-ui/core/Avatar";

import { useSelector } from "react-redux";
import "./familycard.css";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function FamilyCard() {
  const classes = useStyles();
  const selectedMemberData = useSelector(
    (state) => state.AccordianUi.selectedMemberData
  );

  return (
    <>
      <div className='box'>
        <h1 className='title'>Family Details</h1>

        <CardHeader
          avatar={
            <Avatar aria-label='Family Photo' className={classes.avatar}>
              F
            </Avatar>
          }
          title={selectedMemberData.name}
          subheader='Family Member'
        />

        <div class='content'>
          <p>Name: {selectedMemberData.name}</p>
          <p>Age:{selectedMemberData.age}</p>
          <p>Location: {selectedMemberData.location}</p>
          <p>Persent Address: {selectedMemberData.permanentAddress}</p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import Filter from "./Filter";
const brandBar = [
  {
    category: "Category",
    points: ["Men", "Women"],
  },
  {
    category: "Brand",
    points:["Parx","RoadStar"]
  },
  {
    category: "Type",
    points: ["RoundNeck", "Collar"],
  },
];

const Filters = ({setFilters,filters}) => {
  return (
    <div className="sidebar">
      <List
        sx={{
          width: "100%",
          maxWidth: 400,
          bgcolor: "background.paper",
          padding: "5%",
          color: "gray",
        }}
      >
        {/* <Divider /> */}
        <p
          style={{
            padding: "5%",
            fontWeight: "700",
            color: "black",
            boxShadow:
              "boxShadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          Filters
        </p>
        {brandBar.map((value, i) => {
          return(
             <Filter data={value} setFilters={setFilters} filters={filters} i={i}/>
          ) 
        })}
      </List>
    </div>
  );
};

export default Filters;

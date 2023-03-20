import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import "../App.css";
import FilterElement from "./FilterElement";
export default function Filter({ data, i,filters,setFilters }) {
  const [isCheck, setIsChecked] = useState(false);
 
  
  return (
    <List
      disablePadding
      sx={{
        width: "100%",
        maxWidth: 300,
        bgcolor: "white",
        padding: "3%",
        color: "black",
      }}
      key={i}
    >
      <p>{data.category}</p>

      <ListItem
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
      {data.points.map((value,i) => {
        return (<FilterElement value={value} i={i} fil={filters} setFilter={setFilters}/>)
      })}

      </ListItem>
    </List>
  );
}

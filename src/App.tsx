import { TopBar } from "./components/TopBar";
import { Breadcrumb } from "./components/Breadcrumb";
import { Button, Stack, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [list, setList] = useState(`1\n2\n3\n4\n5`);
  const [timestamp, setTimestamp] = useState("");
  const onClickRandomize = () => {
    let listItems = list.split("\n").filter((val) => val !== "");
    for (let index = listItems.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      const temporary = listItems[index];
      listItems[index] = listItems[randomPosition];
      listItems[randomPosition] = temporary;
    }
    setList(listItems.join("\n"));
    setTimestamp(new Date().toLocaleString("en-GB"));
  };

  return (
    <Stack spacing={2} p={2}>
      <TopBar />
      <Breadcrumb />
      <TextareaAutosize
        value={list}
        style={{ maxWidth: "100%", minHeight: 150, fontSize: 20 }}
      />
      {timestamp && <Typography>{timestamp}</Typography>}
      <Button variant="contained" onClick={onClickRandomize}>
        Randomize
      </Button>
    </Stack>
  );
}

export default App;

import React, { useState } from "react";
import {
  Box,
  Checkbox,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Task = () => {
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks
  const [input, setInput] = useState(""); // State to manage input text

  // Add a new task
  const handleAddTask = () => {
    if (input.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), text: input, completed: false },
      ]);
      setInput(""); // Clear input after adding a task
    }
  };

  // Toggle task completion status
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Handle drag-and-drop sorting
  const handleDragEnd = (result) => {
    if (!result.destination) return; // Exit if dropped outside the list
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items); // Update state with reordered items
  };

  return (
    <Box
      sx={{
        maxWidth: 480,
        mx: "auto",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0.5px",
          color: "#363740",
        }}
        variant="h4"
        align="center"
      >
        Quick Notes
      </Typography>

      {/* Input and Add Button */}
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          sx={{
            background: "#4318FF",
            borderRadius: "16px",
            width: "110px",
            height: "40px",
            position: "relative",
          }}
          onClick={handleAddTask}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "24px",
              textAlign: "center",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            Add
          </Typography>
        </Button>
      </Box>

      {/* Task List with Drag and Drop */}
   

    
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={tasks.id}>
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                backgroundColor: "#f9f9f9",
                borderRadius: 1,
                boxShadow: 1,
                p: 1,
              }}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          onClick={() => handleDelete(task.id)}
                        >
                          <Delete />
                        </IconButton>
                      }
                    >
                      <ListItemIcon>
                        <Checkbox
                          sx={{
                            color: "#4318FF", 
                            // Unchecked state color
                            "&.Mui-checked": {
                              color: "#4318FF", 
                            // Checked state color
                            },
                            "& .MuiSvgIcon-root": {
                              fontSize: 28,
                               // Adjust size of the checkbox
                            },
                          }}
                          checked={task.completed}
                          onChange={() => handleToggle(task.id)}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={task.text}
                        sx={{
                          textDecoration: task.completed
                            ? "line-through"
                            : "none",
                          color: task.completed ? "gray" : "inherit",
                          transition: "color 0.3s",
                        }}
                      />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      
    </Box>
  );
};

export default Task;

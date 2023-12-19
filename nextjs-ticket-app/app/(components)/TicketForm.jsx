"use client";

import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    category: "Software Problem",
    priority: 1,
    progress: 0,
    status: "Not started",
  };
  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!response.ok) {
      throw new Error("Failed to create ticket.");
    }

    console.log("Ticket submitted.");

    // Return to dashboard on successful ticket submission or refresh on error
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Ticket</h3>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
        />
        <label htmlFor="category">Category </label>
        <select
          name="category"
          id="cateogry"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="hardware-problem">Hardware Problem</option>
          <option value="software-problem">Software Problem</option>
          <option value="project">Project</option>
        </select>
        <label htmlFor="priority">Prioirity </label>
        <div>
          <input
            type="radio"
            name="priority"
            id="priority-1"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
            // note that two equals intentional for string & integer accommodation
          />
          <label> 1 </label>
          <input
            type="radio"
            name="priority"
            id="priority-2"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label> 2 </label>
          <input
            type="radio"
            name="priority"
            id="priority-3"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label> 3 </label>
          <input
            type="radio"
            name="priority"
            id="priority-4"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label> 4 </label>
          <input
            type="radio"
            name="priority"
            id="priority-5"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label> 5 </label>
        </div>
        <label htmlFor="progress">Progress </label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          onChange={handleChange}
        />
        <p className="text-right">{formData.progress}%</p>
        <label htmlFor="status">Status </label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not-started">Not Started</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
        <input type="submit" value="Create Ticket" className="btn max-w-xs" />
      </form>
    </div>
  );
};
export default TicketForm;

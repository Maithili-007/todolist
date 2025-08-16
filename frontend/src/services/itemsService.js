const BASE_URL = "https://todolist-harr.onrender.com/api/todo";

// Convert server response to local item format
const mapServerItemToLocalItem = (serverItem) => ({
  _id: serverItem._id,
  task: serverItem.task,
  date: serverItem.date,
  completed: serverItem.completed,
  createdAt: serverItem.createdAt,
  updatedAt: serverItem.updatedAt,
});

export const getItemsFromServer = async () => {
  const response = await fetch(BASE_URL);
  const items = await response.json();
  return items.map(mapServerItemToLocalItem);
};

export const addItemToServer = async (task, date) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

export const deleteItemFromServer = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return id;
};

// Toggle completed/uncompleted
export const toggleItemCompletionOnServer = async (id, completed) => {
  const url = `${BASE_URL}/${id}/${completed ? "completed" : "uncompleted"}`;
  const response = await fetch(url, { method: "PUT" });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

// Edit todo (update task or date)
export const updateItemOnServer = async (id, task, date) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

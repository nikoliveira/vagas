function generateId() {
  const id = ((new Date().getTime() / 1000) * Math.random());
  return Math.round(id);
}

export default generateId;

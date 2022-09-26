module.exports = (validateType, data, res) => {
  const { error } = validateType(data);
  if (error) return res.status(400).send({ message: error.message });
}
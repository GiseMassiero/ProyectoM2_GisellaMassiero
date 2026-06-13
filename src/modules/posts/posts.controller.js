const service = require("./posts.service");

exports.getAll = async (req, res) => {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByAuthor = async (req, res) => {
  try {
    const data = await service.getByAuthor(req.params.authorId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await service.update(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const data = await service.remove(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
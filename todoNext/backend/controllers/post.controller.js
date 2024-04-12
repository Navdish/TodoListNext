const { postService } = require("../service");

exports.fetch = async (req, res) => {
  try {
    const list = await postService.fetchList();
    res.status(200).json({ list, message: "List fetched successfully" });
  } catch (error) {
    res.status(error?.code).json({ message: error?.message });
  }
};

exports.create = async (req, res) => {
  try {
    console.log("Post creation controller");
    const list = await postService.createPost({ data: req?.body });
    res.status(200).json({ list, message: "List fetched successfully" });
  } catch (error) {
    res.status(error?.code).json({ message: error?.message });
  }
};

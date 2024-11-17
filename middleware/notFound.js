const notFound = (req, res) => {
    res.status(404).json({msg: "Sorry! The page you are looking for is not exist!!!"})
}

module.exports = notFound
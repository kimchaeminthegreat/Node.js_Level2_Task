const mongoose = require('mongoose');

const connect = () => {
    mongoose
        // .connect("mongodb://localhost:27017/nodejs_lv1")
        .connect("mongodb://127.0.0.1:27017/Nodejs_Level_2_Task")
        .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
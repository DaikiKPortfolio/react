import React from "react";
const Message = (props) => {
    const { color, children } = props;
    // console.log(
    //     "読み込みの確認/Messageオブジェクトがインポートされる度に読み込まれる。"
    // );
    const ContentStyle = {
        color,
        fontSize: "50px"
    };
    return <p style={ContentStyle}>メッセージjsxファイル</p>;
};
export default Message;
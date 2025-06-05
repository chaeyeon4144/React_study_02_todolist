import { useState } from "react";

function Todolist() {
    const [task , setTask] = useState("")

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <h1 style={{ padding: "10px" }}>Todo List</h1>
      <input
      value={task}
      onChange={}
        type="text"
        placeholder="할 일을 입력하세요."
        style={{ padding: "10px", fontSize: "16px", width: "70%" }}
      />
      {/* 할일 추가 버튼
       */}
      <button style={{ padding: "10px", marginLeft: "10px" }}>추가</button>
    </div>
  );
}
export default Todolist;

const ListComponent = ({ userList }) => {
  console.log(`userListArr ${JSON.stringify(userList)}`);
  return (
    <div>
      <h4>9.listComponent</h4>
      {
        userList.map((item) => {
          return (
            <div key={item.id}>
              <div>이름 : {item.name}</div>
              <div>생일 : {item.birth}</div>
              <div>국적 : {item.nation}</div>
              <div>내용 : {item.content}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default ListComponent;
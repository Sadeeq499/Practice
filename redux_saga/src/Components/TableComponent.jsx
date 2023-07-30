import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/actions";

function TableComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer.user.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    borderSpacing: 0,
    margin: "0px auto",
  };

  const cellStyle = {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "1px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    overflow: "hidden",
    padding: "10px 5px",
    wordBreak: "normal",
  };

  const headerCellStyle = {
    ...cellStyle,
    fontWeight: "normal",
  };

  return (
    <div>
      {state.map((item) => (
        <table className="tg" style={tableStyle}>
          <thead>
            <tr>
              <th className="tg-0lax" style={headerCellStyle}>
                FirstName
              </th>
              <th className="tg-0lax" style={headerCellStyle}>
                Age
              </th>
              <th className="tg-0lax" style={headerCellStyle}>
                Email
              </th>
              <th className="tg-0lax" style={headerCellStyle}>
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax" style={cellStyle}>
                {item.firstName}
              </td>
              <td className="tg-0lax" style={cellStyle}>
                {item.age}
              </td>
              <td className="tg-0lax" style={cellStyle}>
                {item.email}
              </td>
              <td className="tg-0lax" style={cellStyle}>
                <img
                  src={item.image}
                  alt="img"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default TableComponent;

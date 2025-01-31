import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ users }) => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8 ">
          <table className="table   table-bordered table-striped mt-3">
            <thead className="table-dark py-3">
              <tr className="border">
                <th className="text-center py-3">Name</th>
                <th className="text-center py-3">Score</th>
                <th className="text-center py-3">Award Points</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="py-3 text-center col-4">
                    {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                  </td>
                  <td className="py-3 text-center col-4">{user.points}</td>
                  <td className="text-center">
                    <Link
                      to={`/claim-point/${encodeURIComponent(user.name)}`}
                      className="btn btn-outline-primary fw-semibold"
                    >
                      Claim
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;

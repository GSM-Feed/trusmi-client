import Image from "next/image";
import React from "react";

const ContactEmailTemplate = ({ body }: any) => {
  return (
    <div className="w-full" style={{ width: "100%", textAlign: "center" }}>
      <div
        style={{
          width: "700px",
          textAlign: "center",
          display: "inline-block",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <table>
          <tr>
            <td>
              <div className="w-full flex justify-center items-center border border-secondary">
                <img
                  src={"/images/logo/trusmi.svg"}
                  width={114}
                  height={31}
                  alt="Trusmi Logo"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <h1 className="text-center text-3xl font-bold mt-4 text-primary">
                  {body.subject}
                </h1>
                <table
                  style={{
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  <tr>
                    <th
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                    >
                      Name
                    </th>
                    <td
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                    >
                      {body.name}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                    >
                      Email
                    </th>
                    <td
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                    >
                      {body.email}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                    >
                      Phone
                    </th>
                    <td
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                    >
                      {body.phone}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                      colSpan={2}
                    >
                      Message
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        borderCollapse: "collapse",
                      }}
                      colSpan={2}
                    >
                      {body.message}
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ContactEmailTemplate;

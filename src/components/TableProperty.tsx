import React from "react";
import HeaderTitle from "./HeaderTitle";

const Property = ({ data }: { data: any }) => {
  return (
    <div className="w-full bg-white px-5">
      <div className="profile flex flex-row gap-4 items-center justify-center uppercase pt-5">
        <div className="p-5 bg-white ">
          <span>
            <b>Data</b>
          </span>
        </div>
        <div className="p-5 bg-white ">
          <span>Luogo</span>
        </div>
      </div>
      <div className="divider "></div>
      <div className="overflow-x-auto bg-white py-5 w-90 mx-auto ">
        <HeaderTitle title={data.title} shadow={true}></HeaderTitle>
        <h2 className="text-center">Gara: {data.data}</h2>
        <div className="divider w-10 after:bg-black before:bg-black mx-auto"></div>
        <table className="table  mx-auto table-zebra border-black border-1 break-words">
          <thead></thead>
          <tbody>
            {Object.entries(data.report).map(
              ([key, value]: [key: any, value: any]) => (
                <tr className="uppercase text-wrap 	" key={key}>
                  <th className="border ">{key}</th>
                  <td className="border">
                    <b>{value}</b>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Property;

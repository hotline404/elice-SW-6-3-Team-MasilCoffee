import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Options from "./style/GetAllOption.style";
import { getAllOptions } from "../../../../api/orderOption";
import { actionGetAllOptions } from "../../../../redux/action/orderOptionAction";

const GetAllOption = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const allOptions = useSelector((state) => state.orderOption.options);

  const options = [
    { 샷: allOptions.shot },
    { 시럽: allOptions.syrup },
    { 얼음: allOptions.iceAmount },
    { 휘핑: allOptions.whipping },
    { 드리즐: allOptions.drizzle },
    { 우유: allOptions.milk },
  ];

  useEffect(() => {
    const fn = async () => {
      try {
        const options = await getAllOptions(token);
        dispatch(actionGetAllOptions(options));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  return (
    <Options.Container>
      {options.map((option, index) => {
        const optionName = Object.keys(option)[0];
        const optionValues = option[optionName];

        return (
          <Options.Content key={index}>
            <p>{optionName}</p>
            <Options.Ul>
              {Array.isArray(optionValues) &&
                optionValues.length > 0 &&
                optionValues.map((data) => (
                  <li>
                    {data.name}({data.price})
                  </li>
                ))}
            </Options.Ul>
          </Options.Content>
        );
      })}
    </Options.Container>
  );
};

GetAllOption.defaultProps = {
  options: [
    {
      얼음: {
        많이: 0,
        보통: 0,
        조금: 0,
      },
    },
    {
      휘핑: {
        많이: 0,
        보통: 0,
        조금: 0,
      },
    },
    {
      시럽: {
        바닐라: 600,
        헤이즐넛: 600,
        카라멜: 600,
      },
    },
    {
      우유: {
        무지방: 0,
        저지방: 0,
        일반: 0,
        오트: 0,
        두유: 0,
      },
    },
  ],
};

export default GetAllOption;

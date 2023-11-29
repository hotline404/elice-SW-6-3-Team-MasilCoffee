import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Options from "./style/GetAllOption.style";
import { getAllOptions } from "../../../../api/orderOption";
import { actionGetAllOptions } from "../../../../redux/action/orderOptionAction";

const GetAllOption = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const allOptions = useSelector((state) => state.orderOption.options);
  console.log("GetAllOption", allOptions);
  //const options = Object.entries(allOptions).map(([optionName, optionValues]) => ({
  //   [optionName]: Object.entries(optionValues),
  // }));
  const options = [
    { 샷: allOptions.shot },
    { 시럽: allOptions.syrup },
    { 얼음: allOptions.iceAmount },
    { 휘핑: allOptions.whipping },
    { 드리즐: allOptions.drizzle },
    { 우유: allOptions.milk },
  ];
  // const chengedOption = optionsOn.map((optionName) => optionName.value.map((value) => `${value.name}:${value.price}`).join(", "));
  //console.log("options11", optionsOn);
  // console.log("chengedOption", chengedOption);
  // const transformedOptions = optionsOn.map((optionGroup) => {
  //   const category = Object.keys(optionGroup)[0];
  //   console.log("category", optionGroup);
  //   const categoryOptions = optionGroup.value.reduce((acc, item) => {
  //     acc[item.name] = item.price;
  //     return acc;
  //   }, {});

  //   return {
  //     [category]: categoryOptions,
  //   };
  // });

  // console.log("transformedOptions", transformedOptions);

  useEffect(() => {
    const fn = async () => {
      try {
        const options = await getAllOptions(token);
        console.log("options", options);
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
        console.log(optionName, optionValues, option);

        return (
          <Options.Content key={index}>
            <p>{optionName}</p>
            <Options.Ul>
              {optionValues.length &&
                optionValues.map((data, innerIndex) => (
                  <li key={innerIndex}>
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

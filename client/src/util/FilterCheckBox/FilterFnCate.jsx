// {

import FilterFn from "./FilterFn";

//   category: "논커피"
// }

// {
//
//   category: "논커피"
// }



// const check_box_cate = [
//   {
//     id: "filter-espresso",
//     name: "에스프레소",
//     pathFn: (data) => data.category,
//   },

//   {
//     id: "filter-non-coffee",
//     name: "논커피",
//     pathFn: (data) => data.category,
//   },

//   {
//     id: "filter-smoothie",
//     name: "스무디",
//     pathFn: (data) => data.category,
//   },

//   {
//     id: "filter-tea",
//     name: "티",
//     pathFn: (data) => data.category,
//   },

//   {
//     id: "filter-ade",
//     name: "에이드",
//     pathFn: (data) => data.category,
//   },
// ];

const FilterFnCate = (filters, query) = (item) => {
  //filters: {(data) => data.category}
  const filterItems = (filterObj, data) => {

    const pathFn = () => Object.values(filterObj) ;

    return data.map(e => pathFn(e))
  };

  return (
    filterItems(filters, item).search(query) !== -1
  )
};

export default FilterFnCate;
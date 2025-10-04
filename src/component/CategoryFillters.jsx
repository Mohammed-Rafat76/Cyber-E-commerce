import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function CategoryFillters() {
  const [filters] = useState([
    { ischecked: true, name: "smartphones" },
    { ischecked: true, name: "laptops" },
    { ischecked: false, name: "sunglasses" },
    { ischecked: false, name: "motorcycle" },
    { ischecked: false, name: "lighting" },
    { ischecked: false, name: "furniture" },
    { ischecked: false, name: "men shirts" },
    { ischecked: false, name: "women bags" },
  ]);
  return (
    <div>
      <div className="join join-vertical">
        <div className="collapse collapse-arrow join-item w-[256px] bg-white ">
          <input type="checkbox" name="my-accordion-4" />
          <div className="collapse-title font-medium text-[18px] border-b-[0.5px] border-[#B5B5B5]">
            Categories
          </div>
          <div className="w-full collapse-content text-sm flex flex-col gap-2.5 mt-2 p-0">
            <input
              type="search"
              placeholder="Search items"
              className="input w-full bg-[#F5F5F5]"
            />

            {filters.map((el, index) => (
              <div className="w-full flex gap-3" key={index}>
                <label className="flex gap-3">
                  <input
                    type="checkbox"
                    defaultChecked={el.ischecked}
                    className="checkbox checkbox-neutral"
                    id={"ch" + index}
                  />
                  {el.name}
                </label>
              </div>
            ))}
      <button className="btn btn-neutral w-full">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export default function OpenMenuModal() {
  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_1").showModal()}>
        <IoMdMenu className="block md:hidden text-[40px] " />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <div className="flex flex-col gap-3.5 ">
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/"
            >
              {" "}
              Home <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5 " />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/About"
            >
              {" "}
              About <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/Contact-Us"
            >
              {" "}
              Contact Us <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/Blog"
            >
              {" "}
              Blog <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

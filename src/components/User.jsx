import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

import Avatar from "../assets/images.jpg";
import { useGetUsersQuery } from "../features/users/userApi";
import InputComponent from "./Input";
import Button from "./Button";
import Pagination from "./Pagination";
import Modal from "./Modal";

const UserComponent = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(""); // ✅ Renamed here

  console.log("user data", data);

  const filterUser = data?.filter((user) =>
    `${user.name.firstname}`
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
  );

  if (isLoading) return <p>Loading Please wait ....</p>;
  if (error)
    return <p>{error.message ?? "Something went wrong Please try again."}</p>;

  return (
    <section className="rounded-lg p-5 ring shadow-xl ring-gray-900/5 space-y-10 py-5">
      <div className="block md:flex items-center justify-between gap-2 mb-4">
        <InputComponent
          type="text"
          placeholder="Search Users"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          children={"Add User"}
          icon={<IoIosAddCircle className="text-xl md:text-2xl" />}
          className={"bg-black text-white md:mt-0 mt-4"}
        />
      </div>

      <div className="w-auto overflow-x-auto">
        <div className="w-auto mx-auto">
          <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2 font-poppins">
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Address</div>

          </div>

          <Pagination
            data={filterUser}
            renderRow={(user) => (
              <div
                key={user.id}
                className="items-center grid grid-cols-4 md:gap-4 gap-2 py-4 border-b text-sm md:text-base font-poppins"
              >
                <div className="inline-flex items-center gap-3">
                  <img src={Avatar} className="hidden md:block size-10" />
                  <span className="capitalize">
                    {user.name.firstname}
                    <span className="md:inline-block hidden">
                      {user.name.lastname}
                    </span>
                  </span>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      setSelectedEmail(user.email); // ✅ Corrected here
                      setIsModalOpen(true);
                    }}
                    className="text-blue-600 underline hover:text-blue-800 text-sm hover:cursor-pointer"
                    children={'View'}
                  />
                   
                </div>
                <div className="text-sm md:text-base font-poppins">
                  {user.phone}
                </div>

                         <div className="capitalize">
                {user.address.city}, <span className="md:inline-block hidden">{user.address.street}</span>
              </div> 
              </div>
              
            )}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="User Email"
          >
            <p className="break-words">{selectedEmail}</p> {/* ✅ Corrected here */}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;

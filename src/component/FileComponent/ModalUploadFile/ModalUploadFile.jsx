// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// import Button from "../../Components/Button/Button";
// import Flex from "../../Components/Flex/Flex";
// import ReaderFile from "../../DocumentsComponent/ReaderFile/ReaderFile";
// // icon
// import { MdFileUpload } from "react-icons/md";
// import { FaXmark } from "react-icons/fa6";
// // post file to firebase
// import { CreateFile } from "../../../api/File/CRUD";
// // id
// import { v4 } from "uuid";
// // get data from firebase
// function ModalUploadFile({ hidden, setIsHidden }) {
//   const loginUser = useSelector((state) => state.login);
//   // state
//   const [file, setFile] = useState({
//     id: "",
//     fileName: "",
//     content: "",
//     createdAt: "",
//     updateAt: "",
//     type: "",
//     size: null,
//   });
//   const handleUploadFile = (e) => {
//     e.preventDefault();
//     CreateFile(file, loginUser);
//     setFile({
//       id: "",
//       fileName: "",
//       content: "",
//       createdAt: "",
//       updateAt: "",
//       type: "",
//       size: null,
//     });
//   };
//   const onSelectFile = (e) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       setFile(undefined);
//       return;
//     }
//     setFile({
//       id: v4(),
//       fileName: e.target.files[0].name,
//       content: "",
//       type: e.target.files[0].type,
//       size: e.target.files[0].size,
//       createdAt: new Date(),
//       updateAt: new Date(),
//     });
//   };

//   return (
//     <div
//       className="modal modaluploadfile relative  z-[10] transition-all"
//       hidden={hidden}
//     >
//       <form
//         className="w-full h-full relative bg-white-2  shadow-lg text-black p-4 rounded-6"
//         onSubmit={handleUploadFile}
//       >
//         <h1 className="text-center py-4 text-[1.3rem] font-bold">
//           Upload File Data
//         </h1>
//         {/* choose file*/}
//         <Flex justify="start">
//           <label
//             htmlFor="inputFile"
//             className="flex items-center justify-start border-[1px] border-[#888] hover:border-blue cursor-pointer transition-all duration-300 p-2"
//           >
//             <span className="text-[1rem] ">Choose file</span>
//             <MdFileUpload className="text-[1.3rem] ml-8" />
//           </label>
//           <input
//             type="file"
//             id="inputFile"
//             className="hidden"
//             onChange={onSelectFile}
//           />
//         </Flex>
//         {/* Preview file will update */}
//         {setFile.fileName !== " " && (
//           <div className="w-[100%] min-h-[30%] mt-[24px] grid grid-cols-4 gap-x-[20px] transition-all duration-500">
//             <div>
//               <h3 className="text-black-2">Image</h3>
//               <img
//                 // src={preview}
//                 className="w-[50px] h-[50px] mr-8"
//                 alt="previewImage"
//               />
//             </div>
//             <div>
//               <p className="text-black-2  ">Name</p>
//               <h4 className="text-[0.95rem] truncate hover:text-clip">
//                 {file.fileName}
//               </h4>
//             </div>
//             <div>
//               <h3 className="text-black-2">Type</h3>
//               <h4 className="text-[0.95rem] truncate hover:text-clip">
//                 {file.type}
//               </h4>
//             </div>
//             <div>
//               <h3 className="text-black-2">Size</h3>
//               <h4 className="text-[0.95rem]">
//                 {file.size} <span className="text-black-2">(bytes)</span>
//               </h4>
//             </div>
//           </div>
//         )}
//         {/* button handle event upload file */}
//         <div className="w-[100%] flex items-center justify-center">
//           <Button justify="center" className="button__blue text-white">
//             Upload
//           </Button>
//         </div>
//       </form>
//       <ReaderFile />
//       {/* button close modal */}
//       <div
//         className="absolute top-0 right-[0px] cursor-pointer flex items-center justify-center p-[8px] bg-red rounded-tr-6"
//         onClick={() => {
//           setIsHidden(true);
//         }}
//       >
//         <FaXmark className="text-[1.3rem] text-white " />
//       </div>
//     </div>
//   );
// }

// export default ModalUploadFile;

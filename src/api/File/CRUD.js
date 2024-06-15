import firebase from "../Firebase/Firebase";
import "firebase/database";

export const CreateFile = async (data, loginUser) => {
  const {
    id,
    fileName,
    content,
    describe,
    type,
    size,
    createdAt,
    updatedAt,
    isDelete,
    isFavorite,
    options: { fontSize, isBold, isItalic, isUnderline },
  } = data;

  try {
    const databaseRef = firebase.database().ref(`data/${loginUser.uuId}/${id}`);
    await databaseRef.set({
      id: id,
      fileName: fileName,
      content: content,
      describe: describe,
      type: type,
      size: size,
      createdAt: createdAt,
      updatedAt: null,
      isDelete: isDelete,
      isFavorite: isFavorite,
      options: {
        fontSize: fontSize,
        isBold: isBold,
        isItalic: isItalic,
        isUnderline: isUnderline,
      },
    });
    console.log("File created successfully.");
  } catch (error) {
    console.error("Error creating file:", error);
    throw error;
  }
};
export const UpdateFile = async (
  data,
  editableContent,
  editableName,
  changeOptions,
  loginUser,
  param
) => {
  const { bold, italic, underline, size } = changeOptions;
  var postData = {
    ...data,
    updatedAt: new Date().toLocaleDateString("en-GB"),
    fileName: editableName,
    content: editableContent,
    options: {
      isItalic: italic,
      isUnderline: underline,
      isBold: bold,
      fontSize: size,
    },
  };
  try {
    //
    var updates = {};
    updates[`/data/${loginUser.uuId}/` + param] = postData;
    return await firebase.database().ref().update(updates);
  } catch {}
};
export const RemoveFileTemporary = async (loginUser, param, isDelete) => {
  const dataRef = firebase.database().ref(`/data/${loginUser.uuId}/${param}`);
  await dataRef.update({
    isDelete: isDelete,
  });
};
export const RemoveFile = async (loginUser, param) => {
  const dataRef = firebase.database().ref(`/data/${loginUser.uuId}/${param}`);
  await dataRef
    .remove()
    .then(() => {
      console.log("delete succes");
    })
    .catch(() => {
      console.log("delete error");
    });
};
export const RestoreFile = async (data, loginUser, param) => {
  var postData = {
    ...data,
    isDelete: false,
  };
  try {
    //
    var updates = {};
    updates[`/data/${loginUser.uuId}/` + param] = postData;
    return await firebase.database().ref().update(updates);
  } catch {}
};
export const FavoritesFile = async (data, isFavorite, loginUser, param) => {
  var postData = {
    ...data,
    isFavorite: isFavorite,
  };
  try {
    //
    var updates = {};
    updates[`/data/${loginUser.uuId}/` + param] = postData;
    return await firebase.database().ref().update(updates);
  } catch {}
};
// upload file from laptop

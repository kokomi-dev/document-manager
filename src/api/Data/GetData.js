import firebase from "../../api/Firebase/Firebase";
export const getData = async (loginUser) => {
  try {
    const dbRef = firebase.database().ref(`data/${loginUser.uuId}`);
    const snapshot = await dbRef.once("value");
    const data = snapshot.val();
    if (data) {
      return {
        all: data,
        idKey: Object.keys(data),
        data: Object.values(data),
      };
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

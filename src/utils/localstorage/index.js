export const AddDataFromLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const GetDataFromLocalStorage = (key) => {
    let data = JSON.parse(localStorage.getItem(key))
    return data ? data : []
}
export const getPublication = async (func1, func2) => {
  const response = await func1();
  func2(response.data);
};

export function handleError(error) {
  let errorMessage = '';
  if (error.response) {
    errorMessage = error.response.data.message;
  } else if (error.request) {
    errorMessage = error.request;
  } else {
    errorMessage = error.message;
  }
  return errorMessage;
}

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

export function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
  }
  return sum / arr.length;
}

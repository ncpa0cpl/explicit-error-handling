// src/base.ts
function error(message) {
  return {
    data: null,
    error: message instanceof Error ? message : new Error(message)
  };
}
function result(data) {
  return { data, error: null };
}
async function ResultingPromise(promiseFn) {
  try {
    const r = await new Promise(promiseFn);
    return result(r);
  } catch (e) {
    return error(e);
  }
}
export {
  ResultingPromise,
  error,
  result
};

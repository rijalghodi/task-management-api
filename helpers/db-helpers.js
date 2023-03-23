exports.createId = (data) => {
  const latestData = data[data.length - 1];
  newId = latestData.id + 1;

  if (newId < 0 || newId === NaN) {
    console.error("Invalid id");
  }
  return newId;
};

exports.findById = (data, recordId) => {
  const record = data.find((item) => item.id === parseInt(recordId));

  if (!record) {
    console.log("Record not found");
  }
  return record;
};

exports.deleteById = (data, recordId) => {
  var index = data.findIndex(function (item) {
    return item.id === parseInt(recordId);
  });

  if (index == -1) {
    console.log("Invalid index");
  }
  data.splice(index, 1);
  return data;
};

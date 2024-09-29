
//dummy data
const dummyData = {
  Calandar: ["Aron's Areospace", "Building Business Inc.", "Cleaning&Clearing"],
  Employees: ["Alice Amar", "Bob Bosnia", "Charlie Chan", "Dave Digger"]
}

const dataIO = {
  getData(key) {
    if(dummyData[key] != null) return dummyData[key];
    return [];
  },

  saveData(key, newData) {
    dummyData[key] = newData;
  }
}



export default dataIO;

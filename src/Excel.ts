import ExcelJS from "exceljs";
export default () => {
  //Create workbook
  const workbook = new ExcelJS.Workbook();
  //set workbook properties
  workbook.creator = "Me";
  workbook.lastModifiedBy = "Her";
  workbook.created = new Date(1985, 8, 30);
  workbook.modified = new Date();
  workbook.lastPrinted = new Date(2016, 9, 27);

  //add worksheet
  const sheet = workbook.addWorksheet("My Sheet");
  sheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Name", key: "name", width: 32 },
    { header: "D.O.B.", key: "DOB", width: 10, outlineLevel: 1 },
  ];

  writeFile(workbook);
};

const writeFile = async (workbook: ExcelJS.Workbook) => {
  // write to a file
  await workbook.xlsx.writeFile("Ciao.xlsx");
};
